import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        resolve(res);
      })
      .catch(reject);
  });
};

export const registerRequest = (email, password) => {
  const auth = getAuth();

  return new Promise((resolve, reject) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  );
};
