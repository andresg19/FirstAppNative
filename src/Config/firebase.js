import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Constants  from "expo-constants";


const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId:Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;