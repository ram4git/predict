import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA5RRgpxfQ13xoelb_mdVaYYpoZttRcteU",
  authDomain: "predict-d05f3.firebaseapp.com",
  databaseURL: "https://predict-d05f3.firebaseio.com",
  projectId: "predict-d05f3",
  storageBucket: "predict-d05f3.appspot.com",
  messagingSenderId: "423561349871"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
