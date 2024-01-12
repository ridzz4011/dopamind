const firebaseConfig = {
    apiKey: "AIzaSyD5_7ojH_1jdQ1_j1e5XRq2VgDaaJcXKHk",
    authDomain: "dopamind-hackfest-test.firebaseapp.com",
    projectId: "dopamind-hackfest-test",
    storageBucket: "dopamind-hackfest-test.appspot.com",
    messagingSenderId: "944796084512",
    appId: "1:944796084512:web:b60a7c12e757737d4f8f45",
    measurementId: "G-L587E2Y021"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);