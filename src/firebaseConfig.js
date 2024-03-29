import * as firebase from 'firebase';

require('dotenv').config();

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const messaging = firebaseApp.messaging();

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const message = firebase.messaging();
    await message.requestPermission();
    const token = await message.getToken();

    return token;
  } catch (error) {
    Error(error);
  }
};
