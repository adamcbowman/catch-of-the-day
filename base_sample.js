import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "insert_key_here",
  authDomain: "insert_authdomain_here",
  databaseURL: "insert_dburl_here",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;