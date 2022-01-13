import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCf1OT7tntPc2sVTbQJDUMwJi0Ghu4JEag',
  authDomain: 'projectmobile-enouvo.firebaseapp.com',
  projectId: 'projectmobile-enouvo',
  storageBucket: 'projectmobile-enouvo.appspot.com',
  messagingSenderId: '784709105860',
  appId: '1:784709105860:web:fc6f420795a12f9ce8b191',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
