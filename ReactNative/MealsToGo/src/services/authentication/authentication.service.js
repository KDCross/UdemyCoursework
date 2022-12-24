import React, { createContext, useState } from "react";
import { FirebaseError, initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

//const auth = getAuth(app);

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(auth, email, password);
