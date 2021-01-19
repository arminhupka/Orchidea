import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyle';
import orchidLogo from '../images/orchid_logo.svg';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Helmet from 'react-helmet';

const ContentWrapper = styled.div``;

const InnerWrapper = styled(Container)``;

const StyledImage = styled.img`
  width: 30rem;
  padding: 5rem;
  @media screen and (min-width: 992px) {
    width: 40rem !important;
  }
`;

//ABOUT

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 992px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const AboutText = styled.div`
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;

// SERVICES
const ServicesSection = styled.section`
  background-color: ${({ theme }) => theme.primaryLight};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

//TEAM
const TeamSection = styled.section``;
const MembersWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  } ;
`;
const MemberCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding: 2rem;
`;
const MemberAvatar = styled.div`
  position: relative;
  height: 20rem;
  width: 20rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  border: 0.5rem solid ${({ theme }) => theme.primary};
  overflow: hidden;
  background-color: red;
`;
const MemberPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
`;

const MemberName = styled.h2`
  margin-bottom: 1rem;
`;

const MemberDescription = styled.ul`
  flex: 1;
  width: 60%;
  margin-bottom: 1rem;
  text-align: center;
`;

const BookButton = styled(Button)``;

const IndexPage = ({
  data: {
    allFile: { nodes },
  },
}) => {
  console.log(nodes[2]);
  return (
    <>
      <Helmet>
        <title>Orchidea</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ContentWrapper>
        <Hero />
        <InnerWrapper>
          <AboutSection>
            <AboutText>
              <h1>Studio Urody Orchidea</h1>
              <p>
                Mea ei paulo debitis affert nominati usu eu, et ius dicta
                detraxit probatus facete nusquam.
              </p>
              <p>
                Mea ei paulo debitis affert nominati usu eu, et ius dicta
                detraxit probatus facete nusquam deleniti ex nec te sit tale
                atqui abhorreant luptatum conclusionemque cum quo et wisi ignota
                semper.
              </p>
              <Button>Umów wizytę</Button>
            </AboutText>
            <StyledImage src={orchidLogo} alt="" />
          </AboutSection>
        </InnerWrapper>
        <ServicesSection>
          <InnerWrapper>
            <SectionTitle
              title="Usługi"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus porro repudiandae tempora?"
            />
            <ServicesGrid>
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </ServicesGrid>
          </InnerWrapper>
        </ServicesSection>
        <TeamSection>
          <InnerWrapper>
            <SectionTitle
              title="Nasz zespół"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <MembersWrapper>
              <MemberCard>
                <MemberAvatar>
                  {/*<MemberPicture*/}
                  {/*  src={nodes[2].childImageSharp.fluid.src}*/}
                  {/*  sizes={nodes[2].childImageSharp.fluid.sizes}*/}
                  {/*  srcSet={nodes[2].childImageSharp.fluid.srcSet}*/}
                  {/*/>*/}
                </MemberAvatar>
                <MemberName>Angelika</MemberName>
                <MemberDescription>
                  <li>kosmetyczka</li>
                  <li>zabiegi medycyny estetycznej</li>
                  <li>modelowanie sylwetki</li>
                  <li>stylistka paznokci</li>
                </MemberDescription>
                <BookButton>Umów termin</BookButton>
              </MemberCard>
              <MemberCard>
                <MemberAvatar>
                  {/*<MemberPicture*/}
                  {/*  src={nodes[3].childImageSharp.fluid.src}*/}
                  {/*  sizes={nodes[3].childImageSharp.fluid.sizes}*/}
                  {/*  srcSet={nodes[3].childImageSharp.fluid.srcSet}*/}
                  {/*/>*/}
                </MemberAvatar>
                <MemberName>Dominika</MemberName>
                <MemberDescription>
                  <li>stylistka paznokci</li>
                  <li>pedicurzystka</li>
                </MemberDescription>
                <BookButton>Umów termin</BookButton>
              </MemberCard>
              <MemberCard>
                <MemberAvatar>
                  {/*<MemberPicture*/}
                  {/*  src={nodes[4].childImageSharp.fluid.src}*/}
                  {/*  sizes={nodes[4].childImageSharp.fluid.sizes}*/}
                  {/*  srcSet={nodes[4].childImageSharp.fluid.srcSet}*/}
                  {/*/>*/}
                </MemberAvatar>
                <MemberName>Justyna</MemberName>
                <MemberDescription>
                  <li>stylistka paznokci</li>
                  <li>kosmetyczka</li>
                  <li>pedicurzystka</li>
                </MemberDescription>
                <BookButton>Umów termin</BookButton>
              </MemberCard>
            </MembersWrapper>
          </InnerWrapper>
        </TeamSection>
      </ContentWrapper>
    </>
  );
};

export const query = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            src
            sizes
            srcSet
          }
        }
      }
    }
  }
`;

export default IndexPage;
