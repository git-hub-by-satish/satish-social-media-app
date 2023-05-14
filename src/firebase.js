import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_05qUbkPbSsfxMwC7tokcJBRjgWWMPAQ",
  authDomain: "satish-social-media-app-e728c.firebaseapp.com",
  projectId: "satish-social-media-app-e728c",
  storageBucket: "satish-social-media-app-e728c.appspot.com",
  messagingSenderId: "510412112296",
  appId: "1:510412112296:web:770aaecf8b283b67065d9d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//export const db = firebase.firestore()
//const auth = firebase.auth()

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default auth