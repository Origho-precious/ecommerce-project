import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzklmuZsb_5Ait1FatkT-Mg3Vor1hFJ8A",
    authDomain: "ecomerce-project-40990.firebaseapp.com",
    databaseURL: "https://ecomerce-project-40990.firebaseio.com",
    projectId: "ecomerce-project-40990",
    storageBucket: "ecomerce-project-40990.appspot.com",
    messagingSenderId: "361284578530",
    appId: "1:361284578530:web:58896ab84048601b9682bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
      return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {
        displayName,
        email,
      } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log(error.message);
      }
    }

    return userRef;
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;