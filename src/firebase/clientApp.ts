// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; //firestore database
import {getStorage} from 'firebase/storage';  // database storage
// firestore database is different from storage, storage is used to store the data such as media, video and other files, while the database is used to store javascript objects
import { getAnalytics } from "firebase/analytics";
import { getSourceMapRange } from "typescript";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-YBESHNLYNQ"
};

// Initialize Firebase for SSR (server side rendering)
// our Next.js app supports server side rendering (SSR)
// in the server-side rendering, our webpage is first rendered by the server and then given to the client side for client side rendering
// we must not call the intialise app function on both the client and server side and only one side
// to make sure that it is called only once, we use the followig code

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// if getApps() length is zero then that means our app is still not intialized, so we would intialize it using initializeApp function
// otherwise we would get the app from getApp() function
// this would make sure that our initializeApp function is called only once and not both the sides (server and client);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// we will export them, so that they are globally avaialble even on the client side
export {app, firestore, auth, storage };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);