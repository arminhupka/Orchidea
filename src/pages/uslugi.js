import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from 'styled-components';
import {Container} from '../styles/GlobalStyle';
import Accordion from "../components/Accordion/Accordion";
import {Helmet} from "react-helmet";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const StyledSection = styled.section``;
const InnerWrapper = styled(Container)``;
const AccordionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

const Uslugi = () => {

    const query = graphql`
        {
            allDatoCmsServicesAccordion(sort: {fields: id, order: DESC}) {
                nodes {
                    title
                    description
                    features {
                      text
                    }
                    image {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    `

    const {allDatoCmsServicesAccordion: {nodes: services}} = useStaticQuery(query)

    return (
        <>
            <Helmet>
                <title>Usługi | Studio Urody Orchidea</title>
            </Helmet>
            <StyledSection>
                <InnerWrapper>
                    <SectionTitle title="Usługi" subtitle="Zapoznaj się z naszą obszerną listą usług z których możesz skorzystać "/>
                    <AccordionsWrapper>
                        {services.map(service => <Accordion title={service.title} description={service.description} features={service.features}
                                                            image={service.image}/>)}
                    </AccordionsWrapper>
                </InnerWrapper>
            </StyledSection>
        </>
    )
}

export default Uslugi;
