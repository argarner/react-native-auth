import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const StyledHeader = styled(View)`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  height: 60;
  /* ios only */
  box-shadow: 0px 3px 3px #d3d3d3;
  /* android only */
  elevation: 2;
`;

const StyledText = styled(Text)`
  font-size: 20;
  color: black;
`;

const Header = props => (
  <StyledHeader>
    <StyledText>{props.headerText}</StyledText>
  </StyledHeader>
);

export default Header;
