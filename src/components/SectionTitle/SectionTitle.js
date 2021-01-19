import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
  display: block;
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = ({ title, subtitle }) => (
  <HeadingWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </HeadingWrapper>
);

export default SectionTitle;
