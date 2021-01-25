import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70%;
  background-color: ${({ theme }) => theme.black};
  transform: translateX(${({ visible }) => (visible ? '0' : '-100%')});
  transition: transform 0.6s ease-in-out;
  z-index: 1000;
  @media screen and (min-width: 992px) {
    position: initial;
    height: 100%;
    width: unset;
    margin-left: auto;
    margin-right: 2rem;
    background-color: unset;
    transform: none;
    transition: unset;
  }
`;

const StyledList = styled.ul`
  @media screen and (min-width: 992px) {
    height: 100%;
    display: flex;
  }
`;

const StyledItem = styled.li`
  padding: 2rem 3rem;
  @media screen and (min-width: 992px) {
    position: relative;
    height: 100%;
    padding: unset;
    margin-left: 2rem;
    display: flex;
    align-items: center;

    :hover ::before {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      height: 0.5rem;
      width: 100%;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  @media screen and (min-width: 992px) {
    font-size: 1.6rem;
  }
`;

const Nav = ({ visible }) => (
      <StyledNav visible={visible}>
        <StyledList >
          <StyledItem>
            <StyledLink to="/">Strona Główna</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/o-nas">O Nas</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/uslugi">Usługi</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/cennik">Cennik</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/kontakt">Kontakt</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledNav>
  )

export default Nav;
