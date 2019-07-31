import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const StyledCard = styled(View)`
  border-radius: 2;
  border: 1px solid #ddd;
  margin: 10px 5px 0px 5px;
  background-color: #fff;
  /* ios only */
  box-shadow: 0px 2px 2px #d3d3d3;
  /* android only */
  elevation: 1;
`;

const Card = ({ children }) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};

export default Card;
