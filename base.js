// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5m5DnbU1htjeD3kS0XCOv1QTPeP9jF38",
    authDomain: "jdid-36d4d.firebaseapp.com",
    databaseURL: "https://jdid-36d4d.firebaseio.com",
    projectId: "jdid-36d4d",
    storageBucket: "",
    messagingSenderId: "1058631947734",
    appId: "1:1058631947734:web:3e07958e22051f48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('contact'); 
  function submitForm(e){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var select = document.getElementById('select').value;
      var message = document.getElementById('message').value;
      saveMessage(name,email,select,message);
  }
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function saveMessage(name,email,select,message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          select: select,
          message: message,
      });
  }