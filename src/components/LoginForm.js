import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import styled from 'styled-components';
import { Card, CardSection, TextInputField, Button, Spinner } from './common';

const StyledErrorText = styled(Text)`
  text-align: center;
  color: red;
  font-size: 20;
  padding-top: 10px;
  padding-bottom: 5px;
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: false,
    loading: false,
  }
  onButtonPress = () => {
    this.setState({ error: false, loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(er => {
        this.setState({ error: er.message });
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };
  onLoginSuccess = () => {
    console.log('onLoginSuccess');
    this.setState({
      email: '',
      password: '',
      error: false,
      loading: false,
    });
  }
  onLoginFail = (err) => {
    console.log('onLoginFail');
    this.setState({
      error: err.message || 'Authentication Failed',
      loading: false,
    });
  }
  render() {
    const { error, loading } = this.state;
    return (
      <Card>
        <CardSection>
        <TextInputField
          label="Email"
          placeholder="user@email.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCompleteType="email"
          />
        </CardSection>
        <CardSection>
          <TextInputField
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            autoCompleteType="password"
            secureTextEntry // all that's needed for true
            />
        </CardSection>
        {error && <StyledErrorText>{error}</StyledErrorText>}
        <CardSection>
          <Button
            disabled={loading}
            onPress={this.onButtonPress}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
