import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: User) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);
    
    //if user data does not exist
    if (!userSnapshot.exists()){
        //create/set the document with the data from userAuth in my collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error:any){
            console.log('Error creating the user:', error.message)
        }
    }
        
    return userDocRef;
}
