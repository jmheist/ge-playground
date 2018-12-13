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
const admin = require("firebase-admin");

const fromAddress = "info@thegreatgiftexchange.com";
const fromName = "The Great Gift Exchange";

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers("{{", "}}");

exports.newExchangeCreated = functions.firestore
  .document("exchanges/{exchangeId}")
  .onCreate(function (snap, context) {
    const exchange = snap.data();
    // console.log(exchange);
    const msgOptions = {
      personalizations: [{
        to: [{
          email: "jmheist@gmail.com",
          name: exchange.name
        }],
        dynamic_template_data: {
          exchangeeName: exchange.name
        }
      }],
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
  });

exports.adminVerifiedEmail = functions.firestore
  .document("exchanges/{exchangeId}")
  .onUpdate(async (change, context) => {
    const exchangeUpdate = change.after.data();
    const exchangePrev = change.before.data();
    // const exchangeId = change.after.id;

    if (
      !!exchangeUpdate.adminVerifiedEmail &&
      exchangePrev.adminVerifiedEmail != exchangeUpdate.adminVerifiedEmail
    ) {
      console.log("is verified");

      await change.after.ref
        .collection("exchangees")
        .get()
        .then(async snaps => {
          snaps.forEach(async snap => {
            const ex = snap.data();
            const msgOptions = {
              personalizations: [{
                to: [{
                  email: "jmheist@gmail.com",
                  name: ex.name
                }],
                dynamic_template_data: {
                  exchangeeName: ex.name
                }
              }],
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
            await sgMail.send(msgOptions);
          });
        });
    }
    return 0;
  });

exports.wishListSet = functions.firestore
  .document("exchanges/{exchangeId}/exchangees/{exchangeeUid}")
  .onUpdate(async (change, context) => {
    const exchangee = change.after.data();
    const firstRef = change.after.ref;
    const params = context.params;
    if (!!exchangee.wishlistCreated && !exchangee.wishlistCreatedSent) {
      // send email to who has their name so they can go check the wishlist
      console.log(
        `Wishlist Created: exchangee: ${
          params.exchangeeUid
        }, wishlistCreated: ${exchangee.wishlistCreated}`
      );
      const ref = db.doc(
        `exchanges/${params.exchangeId}/exchangees/${exchangee.drawnUid}`
      );
      await ref.get().then(async snap => {
        const ex = snap.data();
        console.log(ex);
        console.log(exchangee);
        const msgOptions = {
          personalizations: [{
            to: [{
              email: "jmheist@gmail.com",
              name: ex.name
            }],
            dynamic_template_data: {
              exchangeeName: `${ex.name}, ${
                  exchangee.name
                } has created their wishlist. Go check it out.`
            }
          }],
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
        await sgMail.send(msgOptions);
      });
      exchangee.wishlistCreatedSent = true;
      await firstRef.set(exchangee);
    }
    return 0;
  });

// Function to send email to those who lost exhange link
exports.userRequestedExchangeLinks = functions.firestore
  .document("users/{userEmail}")
  .onUpdate(function (change, context) {
    const userBefore = change.before.data();
    const userAfter = change.after.data();
    const ref = change.after.ref;
    const params = context.params;
    const res = userBefore.requestedEmail.isEqual(userAfter.requestedEmail);
    console.log(userBefore.requestedEmail, userAfter.requestedEmail, res);
    // console.log(exchange);
    if (
      userAfter.requestedEmail &&
      !res
    ) {
      console.log("user requested email");
      console.log(userAfter.requestedEmail);
      const msgOptions = {
        personalizations: [{
          to: [{
            email: "jmheist@gmail.com",
            name: userAfter.name
          }],
          dynamic_template_data: {
            exchangeeName: `${
                userAfter.name
              } requested their exahnges: ${userAfter.exchanges.join(", ")}`
          }
        }],
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
    } else {
      console.log("no change");
    }

    return 0;
  });

// Function to remind people to set wishlist after a week

// Function to remind people to check their drawn name's wishlist after a week

// Function to remind everyone that exchange date is only 10 days away (as long as exchange was setup more than XX days before 10 days away. etc. think through this.)