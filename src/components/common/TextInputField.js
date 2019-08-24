import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-size: 18;
  padding: 0px 10px;
  flex: 1;
`;

const StyledTextInput = styled(TextInput)`
  height: 40;
  font-size: 20;
  padding: 5px;
  flex: 2;
`;

const TextInputField = ({ placeholder, label, value, onChangeText, autoCorrect = false, autoCompleteType = 'off', secureTextEntry = false, autoCapitalize = 'none',
}) => {
  return (
    <StyledView>
      <StyledText>{label}</StyledText>
      <StyledTextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCompleteType={autoCompleteType}
        secureTextEntry={secureTextEntry}
        />
    </StyledView>
  );
};

export default TextInputField;
