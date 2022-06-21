
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyASSdc8mEyDZZ9gTBVw6US3tSONRTbkg5M",
  authDomain: "whatapps-clone-2a4b1.firebaseapp.com",
  projectId: "whatapps-clone-2a4b1",
  storageBucket: "whatapps-clone-2a4b1.appspot.com",
  messagingSenderId: "583402535736",
  appId: "1:583402535736:web:b40ba2e8cd911a196b1fcd",
  measurementId: "G-SQ0KYQYBNV"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
