import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA0O-drSr4yNV6va5-HHSSk4yT8npxQmvQ',
    authDomain: 'samamato-art-db.firebaseapp.com',
    projectId: 'samamato-art-db',
    storageBucket: 'samamato-art-db.appspot.com',
    messagingSenderId: '857463895408',
    appId: '1:857463895408:web:4afbc7f11f4bac5b2e8bb5',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Google provider for now
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);

    //if user data does not exist
    if (!userSnapshot.exists()){
        //create/set the document with the data from userAuth in my collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo,
            });
        } catch (error:any){
            console.log('Error creating the user:', error.message)
        }
    }
        
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}