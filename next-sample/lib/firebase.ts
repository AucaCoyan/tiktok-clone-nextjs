import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBrDu90V3xPlE4d4ySloCYawanV0pzZcIM",
    authDomain: "nextfire-5949b.firebaseapp.com",
    databaseURL: "https://nextfire-5949b-default-rtdb.firebaseio.com",
    projectId: "nextfire-5949b",
    storageBucket: "nextfire-5949b.appspot.com",
    messagingSenderId: "150099903330",
    appId: "1:150099903330:web:29df531820d0aa9266e23b",
    measurementId: "G-QYQY4V16DC"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
