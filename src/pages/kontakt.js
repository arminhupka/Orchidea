import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyle';
import Button from '../components/Button/Button';

const StyledSection = styled.section``;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
`;
const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;
const ContactDetails = styled.div``;

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
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  margin: 1rem 0;
`;

const Contact = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <FormContainer>
          <StyledForm>
            <StyledInput type="text" placeholder="Imię i nazwisko" />
            <StyledInput type="text" placeholder="Adres email" />
            <StyledInput type="text" placeholder="Numer telefonu" />
            <StyledInput type="text" placeholder="Temat" />
            <StyledButton black>Wyślij wiadomość</StyledButton>
          </StyledForm>
        </FormContainer>
        <ContactDetails>
          <h1>Kontakt</h1>
        </ContactDetails>
      </StyledContainer>
    </StyledSection>
  );
};

export default Contact;
