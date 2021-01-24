import React from 'react';
import styled from 'styled-components';
import cardImg from '../../images/serviceIcon.svg';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.7em;
  }

  p {
    width: 80%;
  }
`;

const StyledImage = styled.img``;

const ServiceCard = ({ title }) => (
  <CardWrapper>
    <StyledImage src={cardImg} />
    <h2>{title}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </CardWrapper>
);

export default ServiceCard;
