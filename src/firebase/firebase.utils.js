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
  appId: "1:725405082001:web:0d3ca784913ed3dff97a30",
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
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

// This adds items to firebase. It is meant to be used just once to avoid manually load data.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { items, title } = doc.data();
    const objToReturn = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
    console.log(objToReturn);
    return objToReturn;
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
