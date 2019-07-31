import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledCardSection = styled(View)`
  border-bottom-width: 1;
  border-color: #ddd;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;
`;

const CardSection = props => {
  return (
    <StyledCardSection>
      {props.children}
    </StyledCardSection>
  );
};

export default CardSection;
