import React from 'react';
import styled from 'styled-components';

const MenuBar = styled.span`
  display: block;
  width: 3rem;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2rem;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  ${MenuBar}:nth-child(2) {
    margin: 0.7rem 0;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const MenuButton = ({ handleMenuButton }) => (
  <ButtonWrapper onClick={handleMenuButton}>
    <MenuBar />
    <MenuBar />
    <MenuBar />
  </ButtonWrapper>
);

export default MenuButton;
