import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';
import Branding from '../Header/Branding/Branding';
import { FaHome } from 'react-icons/fa';

const StyledFooter = styled.footer``;

const MainFooter = styled.div`
  padding: 3rem 0;
  color: white;
  background-color: ${({ theme }) => theme.black};
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.lightGray};
`;

const Copyright = styled.div`
  padding: 1rem 0;
  color: #fff;
  background-color: ${({ theme }) => theme.darkGray};
`;

const CopyText = styled.p`
  text-align: center;
  color: gray();
`;

const CopyLink = styled.a`
  font-weight: 800;
  color: #fff;
`;

const InnerContainer = styled(Container)``;

const Footer = () => (
  <StyledFooter>
    <MainFooter>
      <InnerContainer>
        <Branding />
        <ContactWrapper>
          <ContactItem>
            <FaHome />
            ul. Jakaś Tam 2/2
          </ContactItem>
          <ContactItem>32 323 33 44</ContactItem>
          <ContactItem>kontakt@orchidea.pl</ContactItem>
        </ContactWrapper>
      </InnerContainer>
    </MainFooter>
    <Copyright>
      <InnerContainer>
        <CopyText>
          created with <span role="img">❤</span>️ by{' '}
          <CopyLink href="https://kolorvision.pl">kolorvision</CopyLink>
        </CopyText>
      </InnerContainer>
    </Copyright>
  </StyledFooter>
);

export default Footer;
