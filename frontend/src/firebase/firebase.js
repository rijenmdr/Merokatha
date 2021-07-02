import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJeTrYE0YSKL7V0Z75mlqUva1lbreFbgQ",
    authDomain: "merokatha-46df4.firebaseapp.com",
    databaseURL: "https://merokatha-46df4-default-rtdb.firebaseio.com",
    projectId: "merokatha-46df4",
    storageBucket: "merokatha-46df4.appspot.com",
    messagingSenderId: "683120965424",
    appId: "1:683120965424:web:8ef9d2f1f933f89850faf5",
    measurementId: "G-JZ2JXHQTN2"
  };

firebase.initializeApp(firebaseConfig)

export default firebase