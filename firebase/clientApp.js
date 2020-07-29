import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import config from './firebaseconfig';


if (typeof window !== 'undefined' && !!firebase.app.length){
    firebase.initializeApp(config.clientCredentials)
    if ('measurementId' in config.clientCredentials) firebase.analytics()
} else{
    console.log('failed')
}

export default firebase;