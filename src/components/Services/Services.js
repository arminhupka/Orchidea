import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import {Container} from '../../styles/GlobalStyle';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import orchidImage from '../../images/orchid_1.svg';
import Button from "../Button/Button";

const StyledSection = styled.section`
  position: relative;
  background-color: ${({theme}) => theme.primaryLight};
`;

const InnerContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin-bottom: 2rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: -20rem;
  right: -20rem;
  height: 53rem;
  width: 33rem;
`;

const Services = () => {
    const query = graphql`
        {
            allDatoCmsService(filter: {featured: {eq: true}}) {
                nodes {
                    title
                    description
                }
            }
        }

    `;

    const {
        allDatoCmsService: {nodes: services},
    } = useStaticQuery(query);

    return (
        <StyledSection>
            <InnerContainer>
                <StyledImage src={orchidImage}/>
                <SectionTitle
                    title="Usługi"
                    subtitle="Sprawdź co możemy dla Ciebie zrobić"
                />
                <StyledGrid>
                    {services.map(service => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}

                        />
                    ))}
                </StyledGrid>
                <Link to="/uslugi">
                    <Button>Poznaj wszystkie nasze usługi</Button>
                </Link>
            </InnerContainer>
        </StyledSection>
    );
};

export default Services;
