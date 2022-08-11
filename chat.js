// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE]

var firebaseConfig = {
    apiKey: "AIzaSyB8DN5td86a-lS8mhOfZ1LyZ1c7UcK83Mk",
    authDomain: "lets-chat-web-app-91ca6.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-91ca6-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-91ca6",
    storageBucket: "lets-chat-web-app-91ca6.appspot.com",
    messagingSenderId: "314906762816",
    appId: "1:314906762816:web:a7da3df5fba4cc719389a5"
};

firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}