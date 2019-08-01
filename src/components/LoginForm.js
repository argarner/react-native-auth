import React, { Component } from 'react';
// import styled from 'styled-components';
import { Card, CardSection, TextInputField, Button } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }
  render() {
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
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
