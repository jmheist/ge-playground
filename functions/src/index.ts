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

exports.newExchangeCreated = functions.firestore.document("exchanges/{exchangeId}").onCreate(function (snap, context) {
    const exchange = snap.data();
    // console.log(exchange);
    const msg = {
        to: exchange.adminEmail,
        from: "jmheist@gmail.com",
        subject: "New Exchange",
        templateId: "d-0591b5d5fb0a42a4a05d0135d6774a60",
        substitutionWrappers: ["{{", "}}"],
        substitutions: {
            name: exchange.name
        }
    };
    return sgMail.send(msg);
});

exports.adminVerifiedEmail = functions.firestore.document("exchanges/{exchangeId}").onUpdate(function (change, context) {
    const exchangeUpdate = change.after.data();
    if (!!exchangeUpdate.adminVerifiedEmail) {
        // console.log(exchange);
        const msg = {
            to: exchangeUpdate.adminEmail,
            from: "jmheist@gmail.com",
            subject: "exchange has been verified",
            templateId: "d-0591b5d5fb0a42a4a05d0135d6774a60",
            substitutionWrappers: ["{{", "}}"],
            substitutions: {
                name: exchangeUpdate.name
            }
        };
        return sgMail.send(msg);
    } else {
        return;
    }
});