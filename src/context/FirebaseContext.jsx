import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDcNPn4N3JHnRLvpnaswb-izG5lsK0ckH8",
    authDomain: "final-project-ecd69.firebaseapp.com",
    projectId: "final-project-ecd69",
    storageBucket: "final-project-ecd69.firebasestorage.app",
    messagingSenderId: "614787839597",
    appId: "1:614787839597:web:0774385d9e269944417164"
  };

const FirebaseApp = initializeApp(firebaseConfig)

const FirebaseContext = createContext(null)

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseContextProvider = ({children}) =>{
    return (
        <FirebaseContext.Provider>
            {children}
        </FirebaseContext.Provider>
    )
}