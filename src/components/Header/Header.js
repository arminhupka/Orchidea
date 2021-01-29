import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';

//Components
import MenuButton from '../MenuButton/MenuButton';
import Branding from './Branding/Branding';
import Nav from './Nav/Nav';
import Button from '../Button/Button';
import Topbar from './Topbar/Topbar';

const StyledHeader = styled.header`
  height: 10rem;
  color: #fff;
  background: ${({ theme }) => theme.black};
`;

const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  @media screen and (max-width: 992px) {
    display: none;
  } ;
`;

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuButton = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Topbar />
      <StyledHeader>
        <StyledContainer>
          <Branding />
          <Nav visible={visible} handleMenuButton={handleMenuButton} />
          <StyledButton>Umów termin</StyledButton>
          <MenuButton handleMenuButton={handleMenuButton} />
        </StyledContainer>
      </StyledHeader>
    </>
  );
};

export default Header;
