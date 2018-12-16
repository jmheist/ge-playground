//
// After saving changes, run this in console at root of project:
// firebase deploy --only functions
//

// Context Object Example
// { eventId: 'ebc06a37-00ef-4c7e-9e09-125222e028fa-0',
//   eventType: 'google.firestore.document.create',
//   notSupported: {},
//   params:
//    { exchangeId: 'VY8jZdyROiybSOeugaPH',
//      exchangee: 'Eq64E1oeTQRfBFSaNUJH',
//      itemId: 'cbfRYk8bNDroT3hMePQF' },
//   resource:
//    { service: 'firestore.googleapis.com',
//      name: 'projects/giftexchange-572f3/databases/(default)/documents/exchanges/VY8jZdyROiybSOeugaPH/exchangees/Eq64E1oeTQRfBFSaNUJH/wishlist/cbfRYk8bNDroT3hMePQF' },
//   timestamp: '2018-12-10T05:14:51.394879Z' }

const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

import * as admin from "firebase-admin";

const fromAddress = "info@thegreatgiftexchange.com";
const fromName = "The Great Gift Exchange";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers("{{", "}}");

///////////////////////////////////////////

import { Change, EventContext } from "firebase-functions";
import { isEqual } from "lodash";
import DocumentSnapshot = admin.firestore.DocumentSnapshot;
import FieldPath = admin.firestore.FieldPath;

const isEquivalent = (before: any, after: any) => {
  return before && typeof before.isEqual === "function"
    ? before.isEqual(after)
    : isEqual(before, after);
};

const conditions = {
  CHANGED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore !== undefined &&
    fieldAfter !== undefined &&
    !isEquivalent(fieldBefore, fieldAfter),

  ADDED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore === undefined && fieldAfter,

  REMOVED: (fieldBefore: any, fieldAfter: any) =>
    fieldBefore && fieldAfter === undefined
};

const field = (
  fieldPath: string | FieldPath,
  operation: "ADDED" | "REMOVED" | "CHANGED",
  handler: (
    change: Change<DocumentSnapshot>,
    context: EventContext
  ) => PromiseLike<any> | any
) => {
  return function(change: Change<DocumentSnapshot>, context: EventContext) {
    const fieldBefore = change.before.get(fieldPath);
    const fieldAfter = change.after.get(fieldPath);
    return conditions[operation](fieldBefore, fieldAfter)
      ? handler(change, context)
      : Promise.resolve();
  };
};

///////////////////////////////////////////

// function createButton(text, link) {
//   var html = '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding-top: 25px;" class="padding"><table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container"><tr><td align="center" style="border-radius: 3px;" bgcolor="#256F9C"><a href="${link}" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 15px 25px; border: 1px solid #256F9C; display: inline-block;" class="mobile-button">'+text+'</a></td></tr></table></td></tr></table>';
//   return html;
// }

exports.newExchangeCreated = functions.firestore
  .document("exchanges/{exchangeId}")
  .onUpdate(
    field("adminUid", "ADDED", (change, context) => {
      console.log("AdminUid Was Added");
      const exchangeAfter = change.after.data();
      // console.log(exchange);
      const msgOptions = {
        personalizations: [
          {
            to: [
              {
                email: exchangeAfter.adminEmail,
                name: exchangeAfter.adminName
              }
            ],
            dynamic_template_data: {
              exchange_name: exchangeAfter.name,
              name: exchangeAfter.adminName,
              email_button_link:
                "http://www.thegreatgiftexchange.com/exchange/" +
                change.after.id +
                "/" +
                exchangeAfter.adminUid +
                "/verify"
            }
          }
        ],
        from: {
          email: fromAddress,
          name: fromName
          // },
          // "reply_to": {
          //   "email": "jacob@highpointealtoona.com",
          //   "name": "Sam Smith"
        },
        template_id: "d-0591b5d5fb0a42a4a05d0135d6774a60"
      };
      return sgMail.send(msgOptions);
    })
  );

exports.adminVerifiedEmail = functions.firestore
  .document("exchanges/{exchangeId}")
  .onUpdate(
    field("adminVerifiedEmail", "ADDED", (change, context) => {
      console.log("adminVerifiedEmail Was Added");
      const exchange = change.after.data();

      if (!exchange.adminIncluded) {
        const msgOptions = {
          personalizations: [
            {
              to: [
                {
                  email: exchange.adminEmail,
                  name: exchange.adminName
                }
              ],
              dynamic_template_data: {
                exchange_name: exchange.name,
                name: exchange.adminName,
                email_button_link:
                  "http://www.thegreatgiftexchange.com/exchange/" +
                  change.after.id +
                  "/" +
                  exchange.adminUid,
                message: exchange.welcomeMessage
              }
            }
          ],
          from: {
            email: fromAddress,
            name: fromName
            // },
            // "reply_to": {
            //   "email": "jacob@highpointealtoona.com",
            //   "name": "Sam Smith"
          },
          template_id: "d-4616262c5be54280b56938ce4ab9d417"
        };
      }

      change.after.ref
        .collection("exchangees")
        .get()
        .then(async snaps => {
          snaps.forEach(async snap => {
            const ex = snap.data();
            const msgOptions = {
              personalizations: [
                {
                  to: [
                    {
                      email: ex.email,
                      name: ex.name
                    }
                  ],
                  dynamic_template_data: {
                    exchange_name: exchange.name,
                    name: ex.name,
                    email_button_link:
                      "http://www.thegreatgiftexchange.com/exchange/" +
                      change.after.id +
                      "/" +
                      snap.id,
                    message: exchange.welcomeMessage
                  }
                }
              ],
              from: {
                email: fromAddress,
                name: fromName
                // },
                // "reply_to": {
                //   "email": "jacob@highpointealtoona.com",
                //   "name": "Sam Smith"
              },
              template_id: "d-8b64ba686c03424a8741c3ca2189ecce"
            };
            await sgMail.send(msgOptions);
          });
        });
      return 0;
    })
  );

exports.wishListSet = functions.firestore
  .document("exchanges/{exchangeId}/exchangees/{exchangeeUid}")
  .onUpdate(
    field("wishlistCreated", "ADDED", (change, context) => {
      console.log("wishlistCreated Was Added");
      const exchangee = change.after.data();
      const firstRef = change.after.ref;
      const params = context.params;
      // if (!!exchangee.wishlistCreated && !exchangee.wishlistCreatedSent) {
      // send email to who has their name so they can go check the wishlist
      console.log(
        `Wishlist Created: exchangee: ${
          params.exchangeeUid
        }, wishlistCreated: ${exchangee.wishlistCreated}`
      );
      const ref = db.collection(`exchanges/${params.exchangeId}/exchangees/`);
      ref.get().then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          const ex = doc.data();
          if (ex.drawnUid === exchangee.id) {
            console.log("got em");
            const msgOptions = {
              personalizations: [
                {
                  to: [
                    {
                      email: ex.email,
                      name: ex.name
                    }
                  ],
                  dynamic_template_data: {
                    name: ex.name,
                    drawn_name: exchangee.name,
                    email_button_link:
                      "http://www.thegreatgiftexchange.com/exchange/" +
                      params.exchangeId +
                      "/" +
                      doc.id +
                      "/wishlist/drawn"
                  }
                }
              ],
              from: {
                email: fromAddress,
                name: fromName
                // },
                // "reply_to": {
                //   "email": "jacob@highpointealtoona.com",
                //   "name": "Sam Smith"
              },
              template_id: "d-8e387b2ccd7b489b934a33af006674d4"
            };
            sgMail.send(msgOptions);
          }
        });
        exchangee.wishlistCreatedSent = true;
        firstRef.set(exchangee);
      });
      return 0;
    })
  );

// Function to send email to those who lost exhange link
exports.userRequestedExchangeLinks = functions.firestore
  .document("users/{userEmail}")
  .onUpdate(
    field("requestedEmail", "CHANGED", (change, context) => {
      const user = change.after.data();
      console.log("user requested email", user.name, user.email);
      const msgOptions = {
        personalizations: [
          {
            to: [
              {
                email: user.email,
                name: user.name
              }
            ],
            dynamic_template_data: {
              name: user.name,
              email_button_link:
                "http://www.thegreatgiftexchange.com/exchange-lookup/" +
                user.email
            }
          }
        ],
        from: {
          email: fromAddress,
          name: fromName
          // },
          // "reply_to": {
          //   "email": "jacob@highpointealtoona.com",
          //   "name": "Sam Smith"
        },
        template_id: "d-d3085df6c30b4ad1a07dc2339e425f84"
      };
      return sgMail.send(msgOptions);
    })
  );

// Function to remind people to set wishlist after a week

// Function to remind people to check their drawn name's wishlist after a week

// Function to remind everyone that exchange date is only 10 days away (as long as exchange was setup more than XX days before 10 days away. etc. think through this.)
