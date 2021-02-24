import React from 'react'
import styled from "styled-components";
import {Container} from "../styles/GlobalStyle";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import OpeningTable from "../components/OpeningTable/OpeningTable";
import Map from "../components/Map/Map";
import {Helmet} from "react-helmet";

const StyledSection = styled.section``
const StyledContainer = styled(Container)``

const ContactDetails = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`

const ContactCard = styled.div`
  flex: 1;
  margin: 1rem 0;

  @media screen and (min-width: 992px) {
    margin: 0 2rem;
  }
`
const StyledLine = styled.hr`
  margin: 1rem 0;
  border: 1px solid ${({theme}) => theme.primary};
`

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const MapWrapper = styled.div`
  background-color: red;
  height: 30rem;
  @media screen and (min-width: 768px) {
    flex: 4;
    height: unset;
  }
`


const Kontakt = () => (
    <>
    <Helmet>
        <title>Kontakt | Studio Urody Orchidea</title>
    </Helmet>
    <StyledSection>
        <StyledContainer>
            <SectionTitle title="Kontakt"
                          subtitle="Skontakuj się z nami a chętnie odpowiemy na wszystkie Twoje pytania dotyczące naszej firmy i usług."/>
            <ContactDetails>
                <ContactCard>
                    <h2>Odwiedź nas</h2>
                    <StyledLine/>
                    <p>ul. Targowa 1, Ruda Śląska</p>
                </ContactCard>
                <ContactCard>
                    <h2>Zadzwoń do nas</h2>
                    <StyledLine/>
                    <a href="tel:506036299">506 036 299</a>
                </ContactCard>
                <ContactCard>
                    <h2>Napisz do nas</h2>
                    <StyledLine/>
                    <a href="mailto:suorchidea@interia.pl">suorchidea@interia.pl</a>
                </ContactCard>
                <ContactCard>
                    <h2>Rezerwacja</h2>
                    <StyledLine/>
                    <a href="https://www.moment.pl/studio-urody-orchidea-ruda-slaska">Zarezerwuj termin przez Moment</a>
                </ContactCard>
            </ContactDetails>
            <BottomInfo>
                <OpeningTable/>
                <MapWrapper>
                    <Map/>
                </MapWrapper>
            </BottomInfo>
        </StyledContainer>
    </StyledSection>
    </>
)
export default Kontakt