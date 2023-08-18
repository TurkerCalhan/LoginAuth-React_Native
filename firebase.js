// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdOy9k6geq0hhmggqRW9wQP0FWIofI4SQ",
  authDomain: "login-ac2b9.firebaseapp.com",
  projectId: "login-ac2b9",
  storageBucket: "login-ac2b9.appspot.com",
  messagingSenderId: "677969655828",
  appId: "1:677969655828:web:0fda44f20eeb56db738f01"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export {auth};