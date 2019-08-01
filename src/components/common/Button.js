import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import { Spinner } from '../common';

const StyledButton = styled(TouchableOpacity)`
  flex: 1;
  border: 1px solid ${props => props.disabled ? 'grey' : 'dodgerblue'};
  border-radius: 10;
  align-items: center;
  justify-content: center;
  height: 50;
`;

const StyledText = styled(Text)`
  font-size: 20;
  color: ${props => props.disabled ? 'grey' : 'dodgerblue'};
  margin-top: 5px;
`;

const Button = ({ onPress, disabled, children }) => {
  return (
      <StyledButton onPress={onPress} disabled={disabled}>
        <StyledText disabled={disabled}>
          {disabled ? <Spinner size="small" /> : children}
        </StyledText>
      </StyledButton>
  );
};

export default Button;
