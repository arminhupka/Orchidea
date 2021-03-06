import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.6s;
  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.darkGray};
    `}
`;

export default Button;
