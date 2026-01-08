// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqVvLUEd5rBgBzG6z-HZbWvVQKuMjaCko",
    authDomain: "brainbustersvr.firebaseapp.com",
    projectId: "brainbustersvr",
    storageBucket: "brainbustersvr.firebasestorage.app",
    messagingSenderId: "1026567086462",
    appId: "1:1026567086462:web:c759a28744cf38aec3932f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);