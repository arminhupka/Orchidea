import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/GlobalStyle';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Button from '../components/Button/Button';
import Hero from '../components/Hero/Hero';
import Helmet from 'react-helmet';
import { FaCheck } from 'react-icons/fa';

const ContentWrapper = styled.div``;

const InnerWrapper = styled(Container)``;

const StyledImage = styled.img`
  margin-top: 5rem;
  width: 30rem;
  @media screen and (min-width: 992px) {
    width: 40rem !important;
    margin-top: 0;
    object-fit: contain;
  }
`;

//ABOUT

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
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
  @media screen and (min-width: 768px) {
    padding-left: 7rem;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
`;

//TEAM
const TeamSection = styled.section``;
const MembersWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
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
`;
const MemberPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
`;

const MemberName = styled.h2``;

const MemberDescription = styled.ul`
  flex: 1;
  //width: 60%;
  margin: 2rem 0;
  text-align: center;

  li {
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
  }
`;

const BookButton = styled(Button)``;

const CheckIcon = styled(FaCheck)`
  margin-right: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const IndexPage = ({
  data: {
    allImageSharp: { nodes },
  },
}) => {
  console.log(nodes);
  const teamPhotos = nodes.filter(node => node.fluid.src.includes('team_'));
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
                To ludzie tworzą miejsce i atmosferę. Ogromne znaczenie ma dla
                nas zespół. Przykładamy bardzo dużą wagę, by osoby pracujące w
                Naszym Studio były kompetentne, zaangażowane w swoją pracę,
                miały odpowiednie podejście do klienta oraz ciągłą chęć rozwoju
                i podnoszenia swoich umiejętności.
              </p>
              <p>
                Ważne jest dla Nas, by każda klientka czuła się u Nas dobrze,
                była zadowolona z wykonanej usługi i z przyjemnością do Nas
                wracała. Dlatego też, wszystkie usługi wykonujemy z ogromną
                starannością i zaangażowaniem, by sprostać nawet najwyższym
                oczekiwaniom. Nasza praca to Nasza pasja, dzięki temu wykonujemy
                ją z przyjemnością i uśmiechem co przekłada się na miłą i
                przyjazną atmosferę w Naszym Studio.
              </p>
              <Button>Umów wizytę</Button>
            </AboutText>
            <StyledImage
              src={nodes[3].fluid.src}
              sizes={nodes[3].fluid.sizes}
              srcSet={nodes[3].fluid.srcSet}
            />
          </AboutSection>
        </InnerWrapper>
        <ServicesSection>
          <InnerWrapper>
            <SectionTitle
              title="Usługi"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ducimus porro repudiandae tempora?"
            />
            <ServicesGrid>
              <ServiceCard title="Dłonie" />
              <ServiceCard title="Henna i regulacja" />
              <ServiceCard title="Zabiegi na stopy" />
              <ServiceCard title="Elektrostymulacja" />
              <ServiceCard title="Dermomasaż" />
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
                  <MemberPicture
                    src={teamPhotos[1].fluid.src}
                    sizes={teamPhotos[1].fluid.sizes}
                    srcSet={teamPhotos[1].fluid.srcSet}
                  />
                </MemberAvatar>
                <MemberName>Angelika</MemberName>
                <MemberDescription>
                  <li>
                    <CheckIcon /> kosmetyczka
                  </li>
                  <li>
                    <CheckIcon /> zabiegi medycyny estetycznej
                  </li>
                  <li>
                    <CheckIcon /> modelowanie sylwetki
                  </li>
                  <li>
                    <CheckIcon /> stylistka paznokci
                  </li>
                </MemberDescription>
                <BookButton>Umów termin</BookButton>
              </MemberCard>
              <MemberCard>
                <MemberAvatar>
                  <MemberPicture
                    src={teamPhotos[0].fluid.src}
                    sizes={teamPhotos[0].fluid.sizes}
                    srcSet={teamPhotos[0].fluid.srcSet}
                  />
                </MemberAvatar>
                <MemberName>Dominika</MemberName>
                <MemberDescription>
                  <li>
                    <CheckIcon /> stylistka paznokci
                  </li>
                  <li>
                    <CheckIcon /> pedicurzystka
                  </li>
                </MemberDescription>
                <BookButton>Umów termin</BookButton>
              </MemberCard>
              <MemberCard>
                <MemberAvatar>
                  <MemberPicture
                    src={teamPhotos[2].fluid.src}
                    sizes={teamPhotos[2].fluid.sizes}
                    srcSet={teamPhotos[2].fluid.srcSet}
                  />
                </MemberAvatar>
                <MemberName>Justyna</MemberName>
                <MemberDescription>
                  <li>
                    <CheckIcon /> stylistka paznokci
                  </li>
                  <li>
                    <CheckIcon /> kosmetyczka
                  </li>
                  <li>
                    <CheckIcon /> pedicurzystka
                  </li>
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
    allImageSharp {
      nodes {
        fluid {
          src
          srcSet
          sizes
        }
      }
    }
  }
`;

export default IndexPage;
