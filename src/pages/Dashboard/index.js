import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { useAuthenticated } from 'react-admin';

const StyledCard = styled(Card)`
  padding: 20px;
`;

const CardHeading = styled(CardHeader)`
  text-align: center;
`;

export default () => {
  useAuthenticated();

  return (
    <StyledCard>
      <CardHeading title="Welcome!" />
    </StyledCard>
  );
};
