import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8hb1y29fdYhyWMzHZCiwrmgL9w2VJIHk",
  authDomain: "sw-db-7894e.firebaseapp.com",
  databaseURL: "https://sw-db-7894e.firebaseio.com",
  projectId: "sw-db-7894e",
  storageBucket: "sw-db-7894e.appspot.com",
  messagingSenderId: "576667574388",
  appId: "1:576667574388:web:384ef03ce8f09ccc86b121"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;