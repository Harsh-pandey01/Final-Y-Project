import { createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";

// Authentication Imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getDatabase, ref, get } from "firebase/database";

import { useLogin } from "./LoginContext";

const firebaseConfig = {
  apiKey: "AIzaSyDcNPn4N3JHnRLvpnaswb-izG5lsK0ckH8",
  authDomain: "final-project-ecd69.firebaseapp.com",
  databaseURL: "https://final-project-ecd69-default-rtdb.firebaseio.com",
  projectId: "final-project-ecd69",
  storageBucket: "final-project-ecd69.firebasestorage.app",
  messagingSenderId: "614787839597",
  appId: "1:614787839597:web:0774385d9e269944417164",
};

const FirebaseApp = initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseAuth = getAuth(FirebaseApp);
const GoogleProvider = new GoogleAuthProvider();
const database = getDatabase(FirebaseApp);

export const FirebaseContextProvider = ({ children }) => {
  // Sign A user
  const handleCreateUserWithEmailAndPassword = (email, pass) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
  };

  const handleSignUpWithGoogle = () => {
    return signInWithPopup(FirebaseAuth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result); // This retrieves the Google credentials
        const googleToken = credential.accessToken; // Google access token
        console.log('Google Access Token:', googleToken);

        const user = result.user;
        console.log('User Info:', user);

        // Retrieve the Firebase ID token
        user.getIdToken().then((idToken) => {
          console.log('Firebase ID Token:', idToken);  // This is the Firebase ID token
        }).catch((error) => {
          console.error('Error getting Firebase ID token:', error);
        });
      })
      .catch((error) => {
        console.error('Error during Google sign-in:', error);
      });
  };

  const handleLoginUsingEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(FirebaseAuth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;

        // Retrieve the Firebase ID token
        user.getIdToken().then((idToken) => {
          console.log('Firebase ID Token:', idToken);  // This is the Firebase ID token
        }).catch((error) => {
          console.error('Error getting Firebase ID token:', error);
        });
      })
      .catch((error) => {
        console.error('Error during email/password sign-in:', error);
      });
  };

  const handleLogOut = () => {
    return signOut(FirebaseAuth);
  };

  const handleRecieveData = () => {
    const dbRef = ref(database, "/DHT");
    get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Data from Realtime Database:", snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  handleRecieveData();

  const [, seIsLogin] = useLogin();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user) {
        seIsLogin(user); // User is logged in
      } else {
        seIsLogin(null); // User is logged out
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        handleCreateUserWithEmailAndPassword,
        handleSignUpWithGoogle,
        handleLoginUsingEmailAndPass,
        handleLogOut,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
