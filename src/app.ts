import admin from "firebase-admin";
import firebase from "firebase";

import serviceAccount from "../service-account-key.json";

firebase.initializeApp({
  apiKey: "AIzaSyC1Wkk7d-_LH4pKujWg2g5MTjbTdSIlfQk",
  projectId: "odan-firebase-auth-sandbox"
});

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key
  })
});

async function main(): Promise<void> {
  const uid = "test";
  const customToken = await admin.auth().createCustomToken(uid);

  console.log(
    (await firebase.auth().signInWithCustomToken(customToken)).user?.uid
  );
  console.log(
    (await firebase.auth().signInWithCustomToken(customToken)).user?.uid
  );
  console.log(
    (await firebase.auth().signInWithCustomToken(customToken)).user?.uid
  );
}

main().catch(e => console.error(e));
