
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQoTwtvOgrYZ5A9zigvYkY4fshD5HLI80",
    authDomain: "stayvista-starter-19f5b.firebaseapp.com",
    projectId: "stayvista-starter-19f5b",
    storageBucket: "stayvista-starter-19f5b.appspot.com",
    messagingSenderId: "40616625826",
    appId: "1:40616625826:web:6bd826f350b3f03d8d39fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);