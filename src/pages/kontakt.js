import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyle';
import Button from '../components/Button/Button';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { FiHome, FiPhone } from 'react-icons/all';

const StyledSection = styled.section``;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const OpeningTime = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  margin-top: 2rem;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const StyledList = styled.ul`
  padding: 2rem 0;
`;
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  hr {
    flex: 1;
    border: 1px solid ${({ theme }) => theme.primaryDark};
  }
`;

const DayText = styled.p`
  padding-right: 1rem;
`;
const TimeText = styled.p`
  padding-left: 1rem;
`;

const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.primaryDark};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary};
`;

const StyledButton = styled(Button)`
  margin: 1rem 0;
`;

const ContactInfo = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`;

const ContactInfoCard = styled.div`
  text-align: center;
  padding: 2rem;

  svg {
    height: 5rem;
    width: 5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const CardText = styled.div``;

const Contact = () => {
  return (
      <StyledSection>
        <StyledContainer>
          <SectionTitle title="Kontakt" />
          <ContactDetails>
            <ContactInfo>
              <ContactInfoCard>
                <FiHome />
                <CardText>
                  <h2>Adres</h2>
                  <p>ul. Targowa 1</p>
                  <p>Ruda Śląska (Wirek)</p>
                </CardText>
              </ContactInfoCard>
              <ContactInfoCard>
                <FiPhone />
                <CardText>
                  <h2>Telefon</h2>
                  <a href="tel:506036299">506-036-299</a>
                </CardText>
              </ContactInfoCard>
              <ContactInfoCard>
                <FiPhone />
                <CardText>
                  <h2>Telefon</h2>
                  <a href="tel:506036299">506-036-299</a>
                </CardText>
              </ContactInfoCard>
              <ContactInfoCard>
                <FiPhone />
                <CardText>
                  <h2>Telefon</h2>
                  <a href="tel:506036299">506-036-299</a>
                </CardText>
              </ContactInfoCard>
            </ContactInfo>
            <FormContainer>
              <StyledForm>
                <StyledInput placeholder="Imię i nazwisko" />
                <StyledInput placeholder="Imię i nazwisko" />
                <StyledInput placeholder="Imię i nazwisko" />
                <StyledInput placeholder="Imię i nazwisko" />
                <StyledButton black>Wyślij wiadomość</StyledButton>
              </StyledForm>
            </FormContainer>
          </ContactDetails>
          <ContactDetails>
            <OpeningTime>
              <h2>Godziny otwarcia</h2>
              <StyledList>
                <StyledItem>
                  <DayText>Poniedziałek</DayText>
                  <hr />
                  <TimeText>11:00 - 20:00</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Wtorek</DayText>
                  <hr />
                  <TimeText>08:00 - 16:00</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Środa</DayText>
                  <hr />
                  <TimeText>08:00 - 17:00</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Czwartek</DayText>
                  <hr />
                  <TimeText>11:00 - 20:00</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Piątek</DayText>
                  <hr />
                  <TimeText>08:00 - 14:00</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Sobota</DayText>
                  <hr />
                  <TimeText>Nieczynne</TimeText>
                </StyledItem>
                <StyledItem>
                  <DayText>Niedziela</DayText>
                  <hr />
                  <TimeText>Nieczynne</TimeText>
                </StyledItem>
              </StyledList>
            </OpeningTime>
          </ContactDetails>
        </StyledContainer>
      </StyledSection>
  );
};

export default Contact;
