import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up/signup-component';


const SignIn = (): JSX.Element => {
    const logGoogleUser = async (): Promise<void> => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>This is SIGNIN PAGE</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
