import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAg7Lp6F7eYTGzAszirSY9k_yQwe-WKJGk',
  authDomain: 'eshop-77b99.firebaseapp.com',
  databaseURL: 'https://eshop-77b99.firebaseio.com',
  projectId: 'eshop-77b99',
  storageBucket: 'eshop-77b99.appspot.com',
  messagingSenderId: '1041339000243',
  appId: '1:1041339000243:web:b30636303b8703e25f17c6',
  measurementId: 'G-60YBLWWBC7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
