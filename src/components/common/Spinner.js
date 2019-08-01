import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Spinner = ({ size, color }) => {
    return (
      <StyledView>
        <ActivityIndicator size={size || 'large'} color={color} />
      </StyledView>
    );
};

export default Spinner;
