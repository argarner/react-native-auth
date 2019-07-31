import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const StyledButton = styled(TouchableOpacity)`
  flex: 1;
  border: 1px solid dodgerblue;
  border-radius: 10;
  align-items: center;
  justify-content: center;
  height: 50;
`;

const StyledText = styled(Text)`
  font-size: 20;
  color: dodgerblue;
`;

const Button = ({ onPress, children }) => {
  return (
      <StyledButton onPress={onPress}>
        <StyledText>{children}</StyledText>
      </StyledButton>
  );
};

export default Button;
