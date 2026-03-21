import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA65DXG4u03MEQEGYXqqtgJ5CMeKetu0Pw",
  authDomain: "scoreboardciberseguridad.firebaseapp.com",
  databaseURL: "https://scoreboardciberseguridad-default-rtdb.firebaseio.com",
  projectId: "scoreboardciberseguridad",
  storageBucket: "scoreboardciberseguridad.firebasestorage.app",
  messagingSenderId: "1080193765195",
  appId: "1:1080193765195:web:96f154c3966fa6869722ce",
  measurementId: "G-808ZPQBE81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

// 3. Exportamos TODO lo necesario para que SeccionQuiz y SeccionScoreboard lo encuentren
export { db, ref, push, onValue };