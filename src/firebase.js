import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyB4tilpkbP9DTWYOY8B59Hr1XRIAJu_HkU",
    authDomain: "disneyplus-clone-82c31.firebaseapp.com",
    projectId: "disneyplus-clone-82c31",
    storageBucket: "disneyplus-clone-82c31.appspot.com",
    messagingSenderId: "134429762524",
    appId: "1:134429762524:web:af462dd5aad5b33d936519",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;