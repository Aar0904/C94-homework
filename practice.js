var firebaseConfig = {
    apiKey: "AIzaSyBJ6YKJwYjK5SgWyzOxJMCf1xGoj3oQvNk",
    authDomain: "kwitter-40f3e.firebaseapp.com",
    databaseURL: "https://kwitter-40f3e-default-rtdb.firebaseio.com",
    projectId: "kwitter-40f3e",
    storageBucket: "kwitter-40f3e.appspot.com",
    messagingSenderId: "947408112675",
    appId: "1:947408112675:web:ff5a8a976926f5c114f596"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}