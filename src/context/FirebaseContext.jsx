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
  signOut
} from "firebase/auth";
import { useLogin } from "./LoginContext";


const firebaseConfig = {
  apiKey: "AIzaSyDcNPn4N3JHnRLvpnaswb-izG5lsK0ckH8",
  authDomain: "final-project-ecd69.firebaseapp.com",
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

export const FirebaseContextProvider = ({ children }) => {
  // Sign A user
  const handleCreateUserWithEmailAndPassword = (email, pass) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
  };

  const handleSignUpWithGoogle = () => {
    return signInWithPopup(FirebaseAuth, GoogleProvider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginUsingEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(FirebaseAuth, email, pass);
  };

  const handleLogOut = () =>{
    return signOut(FirebaseAuth)
  }

  const [, seIsLogin] = useLogin();
  

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        seIsLogin(user);

      } else {
        seIsLogin(null);
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        handleCreateUserWithEmailAndPassword,
        handleSignUpWithGoogle,
        handleLoginUsingEmailAndPass,
        handleLogOut
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
