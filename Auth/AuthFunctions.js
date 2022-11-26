// all firebase authentication functions

import { doc, setDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

//const navigation = useNavigation();

export const SignUp = async (username, email, password) => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
                const currentUser = cred.user
                console.log("new user created", currentUser.email) 
                
                const mydoc = doc(db, "student", currentUser.uid)
                const userData = {
                 Name: username,
                 Email: email,
                 score: 0,
                 answeredQuestions: null,
                 wrongQuestions: null}

        setDoc(mydoc, userData)
        .then(() => alert("data entered succesfully!"))
        .catch(error => console.log(error.message))})
        .catch(error => console.log(error.message))}

export const Signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
            .then((cred) => { const currentUser = cred.user 
                console.log(currentUser) })
            .catch(error => alert(error.message))}

export const LogOut = () => { signOut(auth)
        .then(()=>{ console.log("user logged out") })
        .catch(error => console.log(error.message))}


