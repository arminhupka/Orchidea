import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import orchidImage from '../../images/orchid_1.svg';

const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.primaryLight};
`;

const InnerContainer = styled(Container)`
  position: relative;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
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
  z-index: 0;
  @media screen and (min-width: 992px) {
    right: -20rem;
  }
`;

const Services = () => {
  const query = graphql`
    {
      allDatoCmsService {
        nodes {
          title
          description
        }
      }
    }
  `;

  const {
    allDatoCmsService: { nodes: services },
  } = useStaticQuery(query);

  return (
    <StyledSection>
      <InnerContainer>
        <StyledImage src={orchidImage} />
        <SectionTitle
          title="Usługi"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <StyledGrid>
          {services.map(service => (
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          ))}
        </StyledGrid>
      </InnerContainer>
    </StyledSection>
  );
};

export default Services;
