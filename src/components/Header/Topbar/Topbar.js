import React from 'react';
import styled from 'styled-components';
import {FaPhone} from 'react-icons/all';
import {Container} from '../../../styles/GlobalStyle';

const TopbarWrapper = styled.div`
  height: 4rem;
  color: ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.darkGray};
`;

const InnerContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledIcon = styled(FaPhone)`
  margin-right: 1rem;
`

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 1.3rem;
  color: ${({theme}) => theme.primary};
`;

const Topbar = () => (
    <TopbarWrapper>
        <InnerContainer>
            <StyledIcon/>
            <StyledLink href="tel:506036299">506-036-299</StyledLink>
        </InnerContainer>
    </TopbarWrapper>
);

export default Topbar;
