// all firebase authentication functions

import { doc, setDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig";
import { db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


//학생 새 계정 만들 기 위한 파이어베이스 auth createUserWithEmailAndPassword 기능 사용하기
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
                 wrongQuestions: null,
                 score1: 0,
                 score2: 0,
                 score3: 0,
                 score4: 0,
                 score5: 0,
                 score6: 0,
                 score7: 0,
                 score8: 0
                }

        setDoc(mydoc, userData)
        .then(() => alert("data entered succesfully!"))
        .catch(error => console.log(error.message))})
        .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                     throw new Error ("email is already in use")
                }
                if (error.code === 'auth/invalid-email') {
                        throw new Error ("this email is not valid")
                }
                if (error.code === 'auth/weak-password') {
                        throw new Error ("Password is too weak. Enter 6 characters at least")
                }
                
        })}

      //Login 하기 위한 기능  
export const Signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
            .then((cred) => { const currentUser = cred.user 
                console.log(currentUser) })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                        alert("Entered email is not valid")
                }
                if (error.code === 'auth/user-not-found') {
                        alert("There is no user corresponding to the given email")
                        }
                if (error.code === 'auth/wrong-password') {
                        alert("The password is invalid for the given email")
                        }
                })
}

//Logout 하기 위한 기능
export const LogOut = () => { signOut(auth)
        .then(()=>{ console.log("user logged out") })
        .catch(error => console.log(error.message))
}


