import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
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
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: null,
  }

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

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: user ? true : false });
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>;
      case false:
        return (
          <>
            <Header headerText="Auth" />
            <LoginForm />
          </>
        );
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
