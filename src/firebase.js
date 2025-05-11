import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

//projectnumber: 958643567887
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1SAiaMQvuu__l7bMfKT0t6XwxUTChCys",
  authDomain: "video-creator-d126c.firebaseapp.com",
  projectId: "video-creator-d126c",
  storageBucket: "video-creator-d126c.appspot.com",

  // storageBucket: "video-creator-d126c.firebasestorage.app",
  messagingSenderId: "958643567887",
  appId: "1:958643567887:web:09a17f189e89c71e0fd27a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// if (window.location.hostname === "localhost") {
//   auth.settings.appVerificationDisabledForTesting = true;
// }
