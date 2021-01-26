import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import {Container} from '../../styles/GlobalStyle';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

import orchideaLogo from '../../images/orchid_logo.svg';

const StyledSection = styled.section``;
const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;
const StyledParagraph = styled.p`
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  height: 25rem;
  width: 25rem;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  margin-right: 2rem;
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  ${StyledButton} {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    ${StyledButton} {
      margin-bottom: 0;
    }
  }
`;

const StyledLink = styled(Link)``;

const About = () => (
    <StyledSection>
        <InnerContainer>
            <StyledImage src={orchideaLogo}/>
            <AboutText>
                <SectionTitle title="Studio Urody Orchidea"/>
                <StyledParagraph>
                    To ludzie tworzą miejsce i atmosferę. Ogromne znaczenie ma dla nas
                    zespół. Przykładamy bardzo dużą wagę, by osoby pracujące w Naszym
                    Studio były kompetentne, zaangażowane w swoją pracę, miały odpowiednie
                    podejście do klienta oraz ciągłą chęć rozwoju i podnoszenia swoich
                    umiejętności.
                </StyledParagraph>
                <StyledParagraph>
                    Ważne jest dla Nas, by każda klientka czuła się u Nas dobrze, była
                    zadowolona z wykonanej usługi i z przyjemnością do Nas wracała.
                    Dlatego też, wszystkie usługi wykonujemy z ogromną starannością i
                    zaangażowaniem, by sprostać nawet najwyższym oczekiwaniom. Nasza praca
                    to Nasza pasja, dzięki temu wykonujemy ją z przyjemnością i uśmiechem
                    co przekłada się na miłą i przyjazną atmosferę w Naszym Studio.
                </StyledParagraph>
                <Cta>
                    <a href="https://www.moment.pl/studio-urody-orchidea-ruda-slaska#oferta">
                        <StyledButton>Zarezerwuj wizytę</StyledButton>
                    </a>
                    <StyledLink to="/kontakt">Skontaktuj się z nami</StyledLink>
                </Cta>
            </AboutText>
        </InnerContainer>
    </StyledSection>
);

export default About;
