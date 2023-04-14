// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCy1mzu8gcrbz7vRUJzcASoA1trYbSnf60',
  authDomain: 'pizza-planet-870ea.firebaseapp.com',
  projectId: 'pizza-planet-870ea',
  storageBucket: 'pizza-planet-870ea.appspot.com',
  messagingSenderId: '259911326455',
  appId: '1:259911326455:web:4fc54f54cd55c2786551f2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export const dbPizzasRef = collection(db, 'pizzas')
export const dbOrdersRef = collection(db, 'orders')
