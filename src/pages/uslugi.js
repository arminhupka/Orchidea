import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from 'styled-components';
import {Container} from '../styles/GlobalStyle';
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";

const StyledSection = styled.section``;
const InnerWrapper = styled(Container)``;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`

const Uslugi = () => {

    const query = graphql`
        {
            allDatoCmsService {
                nodes {
                    title
                    description
                }
            }
        }
    `

    const {allDatoCmsService: {nodes: services}} = useStaticQuery(query)

    return (
        <StyledSection>
            <InnerWrapper>
                <SectionTitle title="Usługi" subtitle="Lorem ipsum dff"/>
                <ServicesGrid>
                    {services.map(service => <ServiceCard title={service.title} description={service.description}/>)}
                </ServicesGrid>
            </InnerWrapper>
        </StyledSection>
    )
}

export default Uslugi;
