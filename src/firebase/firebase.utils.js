import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBZ801QVxpCEwF8Ms61vLn6YHty5ZjpHFY",
  authDomain: "crown-database-0001.firebaseapp.com",
  databaseURL: "https://crown-database-0001.firebaseio.com",
  projectId: "crown-database-0001",
  storageBucket: "crown-database-0001.appspot.com",
  messagingSenderId: "1009220460552",
  appId: "1:1009220460552:web:1a9a6d64c06d45dd89f1bd",
  measurementId: "G-3TDS77DTBM"
};




export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
