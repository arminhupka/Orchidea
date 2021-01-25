import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import Helmet from 'react-helmet';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import About from '../components/About/About';

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Orchidea</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ContentWrapper>
        <Hero />
        <About />
        <Services />
        <Team />
      </ContentWrapper>
    </>
  );
};

export default IndexPage;
