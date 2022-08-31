import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage'; // If using Firebase storage
import 'firebase/firestore'; // for cloud firestore
import 'firebase/auth'; // for authentication

const firebaseConfig = {
  apiKey: 'AIzaSyBiIZP7iplZnS0Xv0AuaRHG8_L7mpjkidw',
  authDomain: 'vehiclerental-235f8.firebaseapp.comvehiclerental-235f8.firebaseapp.com',
  databaseURL: 'https://vehiclerental-235f8-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: 'vehiclerental-235f8.appspot.com',
  messagingSenderId: `${process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const realTimeDb = app.database();
const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage, realTimeDb };
