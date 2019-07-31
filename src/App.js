import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from 'react-native-dotenv';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
    });
  }
  render() {
    return (
      <SafeAreaView>
        <Header headerText="Auth" />
        <LoginForm />
      </SafeAreaView>
    );
  }
}

export default App;
