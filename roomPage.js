var firebaseConfig = {
    apiKey: "AIzaSyDHoLqT861IAbslxH06NRmW-ADXT_y7XxM",
    authDomain: "school-chat-app-843c7.firebaseapp.com",
    projectId: "school-chat-app-843c7",
    storageBucket: "school-chat-app-843c7.appspot.com",
    messagingSenderId: "577748439910",
    appId: "1:577748439910:web:d91af8601e413a05b16ea7",
    measurementId: "G-P6F2QP5ESK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + " !";

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}