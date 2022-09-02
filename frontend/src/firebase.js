import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; // If using Firebase storage
import 'firebase/firestore'; // for cloud firestore
import 'firebase/auth'; // for authentication

const firebaseConfig = {
  apiKey: 'AIzaSyAhPuJr33-yZiYLBbICRbU-fFtaOGW743k',
  authDomain: 'vehicleweb-504bb.firebaseapp.com',
  databaseURL: 'https://vehicleweb-504bb-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: 'vehicleweb-504bb.appspot.com',
  messagingSenderId: `${process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const realTimeDb = app.database();
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage, realTimeDb };
