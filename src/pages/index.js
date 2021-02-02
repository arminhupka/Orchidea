import React from 'react';
import {graphql} from "gatsby";
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

const IndexPage = ({data: {site: {siteMetadata}}}) => {
    const {title, description} = siteMetadata
  return (
    <>
      <Helmet>
        <title>{title} | Studio Urody</title>
        <meta name="description" content={description} />
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

export const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export default IndexPage;
