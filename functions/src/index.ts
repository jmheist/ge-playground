//
// After saving changes, run this in console at root of project: firebase deploy --only functions
//


const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const admin = require('firebase-admin');

//admin.initializeApp(functions.config());
admin.initializeApp();
const SENDGRID_API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{','}}');

exports.newExchangeCreated = functions.firestore.document("exchanges/{exchangeId}").onCreate(function (snap, context) {
    const exchange = snap.data();
    // console.log(exchange);
    const msg = {
        to: exchange.adminEmail,
        from: "jmheist@gmail.com",
        subject: "New Exchange",
        templateId: "d-0591b5d5fb0a42a4a05d0135d6774a60",
        substitutions: {
            name: exchange.name
        }
    };
    return sgMail.send(msg);
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