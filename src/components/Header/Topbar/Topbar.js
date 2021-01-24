import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/all';
import { Container } from '../../../styles/GlobalStyle';

const TopbarWrapper = styled.div`
  height: 4rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.darkGray};
`;

const InnerContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLink = styled.a`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.primary};
`;

const Topbar = () => (
  <TopbarWrapper>
    <InnerContainer>
      <StyledLink to="https://facebook.com">
        <FaFacebookF />
      </StyledLink>
      <StyledLink to="https://facebook.com">
        <FaInstagram />
      </StyledLink>
    </InnerContainer>
  </TopbarWrapper>
);

export default Topbar;
