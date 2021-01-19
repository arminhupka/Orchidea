import React from 'react';
import styled from 'styled-components';
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
`;

const Topbar = () => (
  <TopbarWrapper>
    <InnerContainer>
      <p>lorem</p>
    </InnerContainer>
  </TopbarWrapper>
);

export default Topbar;
