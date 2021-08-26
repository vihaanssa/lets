  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBXIfd6A_Tdl7jiD08mE7cwsCNsuGHP1rg",
      authDomain: "kwitter-cdcc1.firebaseapp.com",
      databaseURL: "https://kwitter-cdcc1-default-rtdb.firebaseio.com",
      projectId: "kwitter-cdcc1",
      storageBucket: "kwitter-cdcc1.appspot.com",
      messagingSenderId: "1062876566467",
      appId: "1:1062876566467:web:48324fbcf85d7c0a9f6376",
      measurementId: "G-P14201J18F"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
