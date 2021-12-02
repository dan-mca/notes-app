import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch(error) {
      console.log(`Sign in error: ${error.code}, ${error.message}`)
    }
  }

  // test user: jd@mail.com qwerty
  // test user: js@mail.com qwerty

  export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      console.log(`Sign up error: ${error.code}, ${error.message}`)
    }
  }

  export const logOut = async () => {
    try {
      console.time('logging out in progress')
      const userSignOut = await signOut(auth);
      console.timeEnd('logging out in progress')
      return userSignOut;
    } catch (error) {
      console.log(`Sign out error: ${error.code}, ${error.message}`)
    }
  }