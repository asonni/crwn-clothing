import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-PXfjYraDvAzzkd9wiXCDshq8dI1r_bU',
  authDomain: 'react-slack-clone-9fdc3.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-9fdc3.firebaseio.com',
  projectId: 'react-slack-clone-9fdc3',
  storageBucket: 'react-slack-clone-9fdc3.appspot.com',
  messagingSenderId: '849476954050',
  appId: '1:849476954050:web:c01722020ffa28cb23985b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
