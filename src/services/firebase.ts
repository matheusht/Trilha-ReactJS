import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDreQuhvg3NW8Btv7R2AIxaCAAENXTmef0",
    authDomain: "letmeask-14660.firebaseapp.com",
    databaseURL: "https://letmeask-14660-default-rtdb.firebaseio.com",
    projectId: "letmeask-14660",
    storageBucket: "letmeask-14660.appspot.com",
    messagingSenderId: "910665476434",
    appId: "1:910665476434:web:8093f338438c002566f28b"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();