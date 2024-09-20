
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPUbIdEOnH-ftgGSdkpPTwuJ7m5bflz0",
  authDomain: "tectax-96a55.firebaseapp.com",
  projectId: "tectax-96a55",
  storageBucket: "tectax-96a55.appspot.com",
  messagingSenderId: "751515079784",
  appId: "1:751515079784:web:f57bc99657ce701c2357dd",
  measurementId: "G-7XKMBE4V10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth

export { auth }; 
export default app; 
