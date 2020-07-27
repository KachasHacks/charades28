import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';


const clientCredentials = {
    apiKey: "AIzaSyC5FW1NbZ1hJSWMdgbhR8PDsdJG6nBXaNI",
    authDomain: "charades28.firebaseapp.com",
    databaseURL: "https://charades28.firebaseio.com",
    projectId: "charades28",
    storageBucket: "charades28.appspot.com",
    messagingSenderId: "88886846382",
    appId: "1:88886846382:web:b15d96c91e4956fece1e3f",
    measurementId: "G-6GGZLDQLZH"
}


if (typeof window !== 'undefined' && !firebase.app.length){
    firebase.initializeApp(clientCredentials)
    if ('measurementId' in clientCredentials) firebase.analytics()
}

export default firebase;