import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions,connectFunctionsEmulator } from "firebase/functions";
import { getStorage } from "firebase/storage";


// Check if environment variables are available
const hasValidConfig = import.meta.env.VITE_FIREBASE_APIKEY && 
                      import.meta.env.VITE_FIREBASE_APIKEY !== 'your_firebase_api_key';

const firebaseConfig = hasValidConfig ? {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-powered-mvp-builder.firebaseapp.com",
  projectId: "ai-powered-mvp-builder",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "327636782437",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} : {
  // Fallback config for development without real Firebase
  apiKey: "demo-key",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id",
};

// Initialize Firebase with error handling
let app, auth, db, functions;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  functions = getFunctions(app);

  // Only connect to emulator if we have valid config and are in development
  if (hasValidConfig && import.meta.env.MODE === "development") {
    connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  }
} catch (error) {
  console.warn("Firebase initialization failed, running in demo mode:", error);
  // Create mock objects for development
  app = null;
  auth = null;
  db = null;
  functions = null;
}


const googleprovider = new GoogleAuthProvider();
const storage = app ? getStorage(app) : null;

export { app, auth, db, storage, googleprovider, hasValidConfig };
