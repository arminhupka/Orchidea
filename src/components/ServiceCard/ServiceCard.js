import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.primary};
  transition: color 0.2s, background 0.2s;
  cursor: pointer;

  :hover {
    color: #fff;
    background: ${({ theme }) => theme.primary};
  }

  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
  @media screen and (min-width: 992px) {
    margin: 1rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.4em;
  }
`;



const ServiceCard = ({ title, description }) => (
  <CardWrapper>
    <h2>{title}</h2>
    <p>{description}</p>
  </CardWrapper>
);

export default ServiceCard;
