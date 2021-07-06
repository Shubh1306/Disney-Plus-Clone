import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAh8DyLKds0rDVQ1zzb-S0pSvBd_ZB7ZsU",
  authDomain: "disney-plus-clone-64533.firebaseapp.com",
  projectId: "disney-plus-clone-64533",
  storageBucket: "disney-plus-clone-64533.appspot.com",
  messagingSenderId: "57042281646",
  appId: "1:57042281646:web:2c6393593e5fc34330b93f",
  measurementId: "G-5BFY381H71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
