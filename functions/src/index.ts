//
// After saving changes, run this in console at root of project: firebase deploy --only functions
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


const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

exports.newExchangeCreated = functions.firestore.document("exchanges/{exchangeId}").onCreate(function (snap, context) {
    const exchange = snap.data();
    // console.log(exchange);
    const msgOptions = {
        "personalizations": [
            {
                "to": [
                    {
                        "email": "jmheist@gmail.com",
                        "name": exchange.name
                    }
                ],
                "dynamic_template_data": {
                    "exchangeeName": exchange.name,
                }
            }
        ],
        "from": {
            "email": "jacob@highpointealtoona.com",
            "name": "Jacob Heisterkamp"
            // },
            // "reply_to": {
            //   "email": "jacob@highpointealtoona.com",
            //   "name": "Sam Smith"
        },
        "template_id": "d-0591b5d5fb0a42a4a05d0135d6774a60"
    }
    return sgMail.send(msgOptions);
});

exports.adminVerifiedEmail = functions.firestore.document("exchanges/{exchangeId}").onUpdate(async function (change, context) {
    const exchangeUpdate = change.after.data();
    // const exchangeId = change.after.id;

    if (!!exchangeUpdate.adminVerifiedEmail) {
        console.log('is verified');

        await change.after.ref.collection('exchangees').get().then(async snaps => {
            snaps.forEach(async snap => {
                const ex = snap.data();
                const msgOptions = {
                    "personalizations": [
                        {
                            "to": [
                                {
                                    "email": "jmheist@gmail.com",
                                    "name": ex.name
                                }
                            ],
                            "dynamic_template_data": {
                                "exchangeeName": ex.name,
                            }
                        }
                    ],
                    "from": {
                        "email": "jacob@highpointealtoona.com",
                        "name": "Jacob Heisterkamp"
                        // },
                        // "reply_to": {
                        //   "email": "jacob@highpointealtoona.com",
                        //   "name": "Sam Smith"
                    },
                    "template_id": "d-0591b5d5fb0a42a4a05d0135d6774a60"
                }
                await sgMail.send(msgOptions);
            });
        });
    }
    return 0;
});


exports.wishListSet = functions.firestore.document("exchanges/{exchangeId}/exchangees/{exchangeeUid}").onUpdate(async function (change, context) {
    const exchangee = change.after.data();
    const params = context.params;
    console.log(exchangee);
    if (!!exchangee.wishlistCreated) {
        // send email to who has their name so they can go check the wishlist
        console.log(`Wishlist Created: exchangee: ${params.exchangeeUid}, wishlistCreated: ${exchangee.wishlistCreated}`);
        await db.document(`exchanges/${params.exchangeId}/exchangees/${exchangee.drawnUid}`).get().then(async snap => {
            const ex = snap.data();
            const msgOptions = {
                "personalizations": [
                  {
                    "to": [
                      {
                        "email": "jmheist@gmail.com",
                        "name": ex.name
                      }
                    ],
                    "dynamic_template_data": {
                      "exchangeeName": `${ex.name}, ${exchangee.name} has created their wishlist. Go check it out.`,
                    }
                  }
                ],
                "from": {
                  "email": "jacob@highpointealtoona.com",
                  "name": "Jacob Heisterkamp"
                // },
                // "reply_to": {
                //   "email": "jacob@highpointealtoona.com",
                //   "name": "Sam Smith"
                },
                "template_id": "d-0591b5d5fb0a42a4a05d0135d6774a60"
              }
            await sgMail.send(msgOptions);
        });
    }
    return 0;
});