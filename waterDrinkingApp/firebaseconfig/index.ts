import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDUCMxblGkQrcjk8Prz66wtMaoD_w8bfo4',
  authDomain: 'fir-waterapp.firebaseapp.com',
  projectId: 'fir-waterapp',
  storageBucket: 'fir-waterapp.appspot.com',
  messagingSenderId: '346132021744',
  appId: '1:346132021744:web:6e36d2e425274483b59d35',
  measurementId: 'G-5XN15279DR',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
