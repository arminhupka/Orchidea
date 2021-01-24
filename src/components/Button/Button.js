import styled from 'styled-components';

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
`;

export default Button;
