import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBa5CgeQY3wiAKp0b50ZnJx7nSLdskbfVo",
    authDomain: "facebook-eddbd.firebaseapp.com",
    databaseURL: "https://facebook-eddbd.firebaseio.com",
    projectId: "facebook-eddbd",
    storageBucket: "facebook-eddbd.appspot.com",
    messagingSenderId: "87130436185",
    appId: "1:87130436185:web:15db46ffd2ded517f0f748",
    measurementId: "G-VZQQXNME5T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db 