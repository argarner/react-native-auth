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
import { Header, Button, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  state = {
    loggedIn: false,
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

  render() {
    return (
      <SafeAreaView>
        <Header headerText="Auth" />
        {!this.state.loggedIn
          ? <LoginForm />
          : (<Card>
              <CardSection>
                <Button>Log Out</Button>
              </CardSection>
            </Card>
          )
        }
      </SafeAreaView>
    );
  }
}

export default App;
