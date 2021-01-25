import React from 'react'
import styled from "styled-components";
import {Container} from "../styles/GlobalStyle";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import OpeningTable from "../components/OpeningTable/OpeningTable";
import Map from "../components/Map/Map";

const StyledSection = styled.section``
const StyledContainer = styled(Container)``

const ContactDetails = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactCard = styled.div`
  flex: 1;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    margin: 0;
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
    <StyledSection>
        <StyledContainer>
            <SectionTitle title="Kontakt"
                          subtitle="We will answer any questions you may have about our online sales, rights or partnership service right here."/>
            <ContactDetails>
                <ContactCard>
                    <h3>Adres</h3>
                    <StyledLine/>
                    <p>ul. Targowa 1, Ruda Śląska</p>
                </ContactCard>
                <ContactCard>
                    <h3>Telefon</h3>
                    <StyledLine/>
                    <p>ul. Targowa 1, Ruda Śląska</p>
                </ContactCard>
                <ContactCard>
                    <h3>Email</h3>
                    <StyledLine/>
                    <p>ul. Targowa 1, Ruda Śląska</p>
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
)
export default Kontakt