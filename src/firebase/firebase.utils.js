import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAS0zfAwyC5UXC7ooYngfi9YAHSifcHYw",
  authDomain: "crwn-db-e0fa7.firebaseapp.com",
  databaseURL: "https://crwn-db-e0fa7.firebaseio.com",
  projectId: "crwn-db-e0fa7",
  storageBucket: "crwn-db-e0fa7.appspot.com",
  messagingSenderId: "725405082001",
  appId: "1:725405082001:web:0d3ca784913ed3dff97a30"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ email, displayName, createdAt, ...additionalData });
    } catch (error) {
      console.log('Error creating user', error.message);
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

export default firebase;
