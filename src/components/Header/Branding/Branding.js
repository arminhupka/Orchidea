import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 4rem;
`;
const StyledLink = styled(Link)`
  color: inherit;
`;

const Branding = () => (
  <StyledLink to="/">
    <StyledH1>orchidea</StyledH1>
  </StyledLink>
);

export default Branding;
