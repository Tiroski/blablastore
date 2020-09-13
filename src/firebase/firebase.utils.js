import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEt-sWsgjiGk5wUuN93W6XR4CCwAEc-d8",
  authDomain: "estore-db-76436.firebaseapp.com",
  databaseURL: "https://estore-db-76436.firebaseio.com",
  projectId: "estore-db-76436",
  storageBucket: "estore-db-76436.appspot.com",
  messagingSenderId: "845423155518",
  appId: "1:845423155518:web:9eb8571f415f3245d9f46f",
  measurementId: "G-KMZJRSX7VL",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const providerF = new firebase.auth.FacebookAuthProvider();
providerF.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(providerF);

export default firebase;
