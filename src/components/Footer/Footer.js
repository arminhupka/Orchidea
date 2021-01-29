import React from 'react';
import styled from 'styled-components';
import {Container} from '../../styles/GlobalStyle';
import Branding from '../Header/Branding/Branding';
import {FaEnvelope, FaHome, FaPhone} from 'react-icons/fa';

const StyledFooter = styled.footer``;

const MainFooter = styled.div`
  padding: 2rem 0;
  color: white;
  background-color: ${({theme}) => theme.black};
`;

const ContactWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.lightGray};
  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }

  svg {
    margin-right: 1rem;
    color: ${({theme}) => theme.primary};
  }

  a {
    color: inherit;
    transition: color .6s;
    font-size: 1.3rem;

    :hover {
      color: ${({theme}) => theme.primary};
    }
  }
`;

const Copyright = styled.div`
  padding: 1rem 0;
  color: #fff;
  font-size: 1.2rem;
  background-color: ${({theme}) => theme.darkGray};
`;

const CopyText = styled.p`
  text-align: center;
  color: gray;
`;

const CopyLink = styled.a`
  font-weight: 800;
  color: #fff;
`;

const StyledBranding = styled(Branding)`
  flex: 1;
`

const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const CopyrightContainer = styled(Container)`

`


const Footer = () => (
    <StyledFooter>
        <MainFooter>
            <InnerContainer>
                <StyledBranding/>
                <ContactWrapper>
                    <ContactItem>
                        <FaHome/>
                        <a href="https://www.google.com/maps/place/Studio+Urody+Orchidea/@50.273241,18.864559,15z/data=!4m2!3m1!1s0x0:0xf9810bc35606d792?sa=X&ved=2ahUKEwjWha7W2cHuAhUwxosKHW-SBboQ_BIwCnoECBQQBQ"> ul.
                            Targowa 1, Ruda Śląska</a>
                    </ContactItem>
                    <ContactItem>
                        <FaPhone/>
                        <a href="tel:506036299">506-036-299
                        </a>
                    </ContactItem>
                    <ContactItem>
                        <FaEnvelope/>
                        <a href="mailto:suorchidea@interia.pl">suorchidea@interia.pl</a>
                    </ContactItem>
                </ContactWrapper>
            </InnerContainer>
        </MainFooter>
        <Copyright>
            <CopyrightContainer>
                <CopyText>
                    created with <span role="img">❤</span>️ by{' '}
                    <CopyLink href="https://kolorvision.pl">kolorvision</CopyLink>
                </CopyText>
            </CopyrightContainer>
        </Copyright>
    </StyledFooter>
);

export default Footer;
