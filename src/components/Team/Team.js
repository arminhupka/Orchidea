import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Container } from '../../styles/GlobalStyle';
import TeamCard from './TeamCard/TeamCard';
import orchideImage from '../../images/orchid_2.svg';

const StyledSection = styled.section`
  position: relative;
`;
const InnerSection = styled(Container)`
  position: relative;
`;
const StyledGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  & > * {
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: -10rem;
  left: -30rem;
  height: 36rem;
  width: 58rem;
  @media screen and (min-width: 992px) {
    left: -20rem;
  }
`;

const query = graphql`
  {
    allDatoCmsTeamMember {
      nodes {
        name
        services
        picture {
          url
        }
      }
    }
  }
`;

const Team = () => {
  const { allDatoCmsTeamMember: members } = useStaticQuery(query);
  return (
    <StyledSection>
      <InnerSection>
        <StyledImage src={orchideImage} />
        <SectionTitle
          title="Nasz zespół"
          subtitle="Mea ei paulo debitis affert nominati usu eu, et ius dicta detraxit probatus facete nusquam deleniti ex nec te sit tale."
        />
        <StyledGrid>
          {members.nodes.map(member => (
            <TeamCard key={member.name}
              name={member.name}
              imgUrl={member.picture.url}
              services={member.services}
            />
          ))}
        </StyledGrid>
      </InnerSection>
    </StyledSection>
  );
};

export default Team;
