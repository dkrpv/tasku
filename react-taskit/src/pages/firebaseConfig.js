import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoWNVLnkwtd3wFn2wKOfy1NzyLLYuaSPM",
    authDomain: "tasku-ab97a.firebaseapp.com",
    databaseURL: "https://tasku-ab97a.firebaseio.com",
    projectId: "tasku-ab97a",
    storageBucket: "tasku-ab97a.appspot.com",
    messagingSenderId: "760925544771",
    appId: "1:760925544771:web:1b003c8d6baeaa9d7a4ff6",
    measurementId: "G-C12JC8S42N"
}

export const fireApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()


export default firebaseConfig;