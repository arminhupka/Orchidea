import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
  display: block;
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    ::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -0.8rem;
      left: 0;
      height: 0.5rem;
      width: 100%;
      background: ${({ theme }) => theme.primary};
    }
  }
  
  p {
    max-width: 40rem;
    margin: 0 auto;
  }
`;

const SectionTitle = ({ title, subtitle }) => (
  <HeadingWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </HeadingWrapper>
);

export default SectionTitle;
