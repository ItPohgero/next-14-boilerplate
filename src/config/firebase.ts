// Import the functions you need from the SDKs you need
// @ts-ignore
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// @ts-ignore
import { getAuth, GoogleAuthProvider } from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// const analytics = getAnalytics(app)
export { auth, googleProvider }
