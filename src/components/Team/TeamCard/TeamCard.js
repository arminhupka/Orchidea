import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 15.5rem;
  width: 15.5rem;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.primary};

  @media screen and (min-width: 992px) {
    height: 21.5rem;
    width: 21.5rem;
  }
`;

const StyledName = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const StyledList = styled.ul`
  margin-bottom: 1rem;
`;
const StyledItem = styled.li``;

const TeamCard = ({ name, imgUrl, services }) => (
  <CardWrapper>
    <StyledImage src={imgUrl} />
    <StyledName>{name}</StyledName>
    <StyledList>
      {services
        ? services
            .split('\n')
            .map(service => service.substring(2))
            .map(el => <StyledItem>{el}</StyledItem>)
        : null}
    </StyledList>
    <Button>Zapisz się</Button>
  </CardWrapper>
);

export default TeamCard;
