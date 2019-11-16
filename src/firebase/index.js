import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSAsa7_AzBif3d3O0h4QcBe2JqytBBgJw",
  authDomain: "businessmanagerfilestorage.firebaseapp.com",
  databaseURL: "https://businessmanagerfilestorage.firebaseio.com",
  projectId: "businessmanagerfilestorage",
  storageBucket: "businessmanagerfilestorage.appspot.com",
  messagingSenderId: "252479096135",
  appId: "1:252479096135:web:a45339c0ac46d3c4def862",
  measurementId: "G-ZY2TJ7H9L0"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase .storage();

export {
  storage,
  firebase as default
}
