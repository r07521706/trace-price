import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxgpOTXfLBwe6YcZSEAZL0VL6VgIJ8mTY",
    authDomain: "saveinterest-4dc19.firebaseapp.com",
    databaseURL: "https://saveinterest-4dc19.firebaseio.com",
    projectId: "saveinterest-4dc19",
    storageBucket: "saveinterest-4dc19.appspot.com",
    messagingSenderId: "362288066371",
    appId: "1:362288066371:web:fddc19da52257977f009f6",
    measurementId: "G-KKNCWQ51KW"
  };


function getData(){
    const app = firebase.initializeApp(firebaseConfig);
    const database = app.database();
    const path = '/data3'
    database.ref(path).once("value", e => {
        (e.val())
    });
}

export default getData