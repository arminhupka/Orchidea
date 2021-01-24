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

const TeamCard = () => (
  <CardWrapper>
    <StyledImage src="https://cdn.versum.net/avatars/4279946/medium/avatar-1601398232-16348701ccb605217628" />
    <StyledName>Name</StyledName>
    <StyledList>
      <StyledItem>service name</StyledItem>
      <StyledItem>service name</StyledItem>
      <StyledItem>service name</StyledItem>
      <StyledItem>service name</StyledItem>
    </StyledList>
    <Button>Zapisz się</Button>
  </CardWrapper>
);

export default TeamCard;
