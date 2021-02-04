import firebase from 'firebase/app';
import "firebase/auth";
import './firebase';

class AuthService {

    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;