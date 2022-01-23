import firebase from "firebase";
 
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXyNroW3moiyTPJrh9eMK1BcyOGlju9Tc",
    authDomain: "instagram-clone-801eb.firebaseapp.com",
    projectId: "instagram-clone-801eb",
    storageBucket: "instagram-clone-801eb.appspot.com",
    messagingSenderId: "419978749506",
    appId: "1:419978749506:web:a87c030b89a858c9496fdb",
    measurementId: "G-PP4D2EGWSD"
 });

 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const storage = firebase.storage();

 export { db, auth, storage }