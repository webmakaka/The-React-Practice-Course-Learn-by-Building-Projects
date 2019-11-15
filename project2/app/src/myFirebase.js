import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDumddw5a4C5teJU8zNP6hG3w9I--Ko9SM',
  authDomain: 'the-react-practice-course.firebaseapp.com',
  databaseURL: 'https://the-react-practice-course.firebaseio.com',
  projectId: 'the-react-practice-course',
  storageBucket: 'the-react-practice-course.appspot.com',
  messagingSenderId: '297951735011',
  appId: '1:297951735011:web:27aec68210ea8c374ba9d6',
  measurementId: 'G-V372ZJ4KY2'
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export { firebase, firebaseMatches };
