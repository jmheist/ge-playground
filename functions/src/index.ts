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

function createButton(text, link) {
  var html = `<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding-top: 25px;" class="padding"><table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container"><tr><td align="center" style="border-radius: 3px;" bgcolor="#256F9C"><a href="${link}" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 15px 25px; border: 1px solid #256F9C; display: inline-block;" class="mobile-button">${text}</a></td></tr></table></td></tr></table>`;
  return html;
}

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
          emailSubject: 'Verify your email address',
          emailHeadline: 'Click to Verify',
          emailBody: '<p>Your exchange is saved and ready to go, click here to verify and get your exchange started!<p>',
          emailButtonCode: createButton('Verify Now','http://localhost:4200/')
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
                  emailSubject: 'Your Gift Exchange Has Started',
                  emailHeadline: 'View the name you drew!',
                  emailBody: '<p>Your gift exchange is officially started and names have been drawn! Click the link below to login to the gift exchange and see your drawn name, and create a wishlist!<p>',
                  emailButtonCode: createButton('View Gift Exchange','http://localhost:4200/')
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
              emailSubject: `See what's on ${ex.name}'s wishlist!`,
              emailHeadline: `${ex.name} has set their wishlist`,
              emailBody: `<p${ex.name} has decided on a few good gift suggestions for you! Check them out now and get a head start on your shopping.<p>`,
              emailButtonCode: createButton(`See ${ex.name}'s Wishlist`,`http://localhost:4200/`)
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
    const res = (userBefore.requestedEmail && userAfter.requestedEmail && userBefore.requestedEmail.isEqual(userAfter.requestedEmail));
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
            emailSubject: 'You requested a new link to your exchange',
            emailHeadline: 'Lost your first email?',
            emailBody: `<p>No worries, we looked up your email address and found it apart of these exchange(s):<br><br>${userAfter.exchanges.join(", ")}<p>`,
            emailButtonCode: createButton('Verify Now','http://localhost:4200/')
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