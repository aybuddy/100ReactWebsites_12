import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDw-zEJ0KvJs3PqXgwb8ZEtrAKnSK044Hw',
  authDomain: 'tinder-clone-cp-4e6f2.firebaseapp.com',
  projectId: 'tinder-clone-cp-4e6f2',
  storageBucket: 'tinder-clone-cp-4e6f2.appspot.com',
  messagingSenderId: '9774582359',
  appId: '1:9774582359:web:2bec307b10b2c80c61f112',
  measurementId: 'G-C8R22TBYLQ',
});

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const database = firebaseApp.firestore();

const database = firebaseApp.firestore();

export default database;
