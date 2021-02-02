import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {Container} from "../styles/GlobalStyle";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import {Helmet} from "react-helmet";

const PageSection = styled.section``
const InnerContainer = styled(Container)``
const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledParagraph = styled.p`
  flex: 1;
  @media screen and (min-width: 768px) {
    padding-right: 5rem;
  }
`

const ImageContainer = styled.div`
  flex: 1;
`

const StyledImage = styled.img`
  height: auto;
  max-width: 100%;
  margin-bottom: 2rem;
  border: .4rem solid ${({theme}) => theme.primary};
  border-radius: .4rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

const About = () => {

    const query = graphql`
        query MyQuery {
            file(name: {eq: "onas_img"}) {
                childImageSharp {
                    fluid {
                        src
                        srcSet
                        sizes
                    }
                }
            }
        }
    `;

    const {file: {childImageSharp: {fluid: {sizes, src, srcSet}}}} = useStaticQuery(query)

    return (
        <>
            <Helmet>
                <title>O Nas | Studio Urody Orchidea</title>
            </Helmet>

            <PageSection>
                <InnerContainer>
                    <SectionTitle title="O nas"/>
                    <Content>
                        <StyledParagraph>To ludzie tworzą miejsce i atmosferę.
                            Ogromne znaczenie ma dla nas zespół. Przykładamy bardzo dużą wagę, by osoby pracujące w
                            Naszym
                            Studio były kompetentne, zaangażowane w swoją pracę, miały odpowiednie podejście do klienta
                            oraz
                            ciągłą chęć rozwoju i podnoszenia swoich umiejętności.
                            Ważne jest dla Nas, by każda klientka czuła się u Nas dobrze, była zadowolona z wykonanej
                            usługi
                            i z
                            przyjemnością do Nas wracała. Dlatego też, wszystkie usługi wykonujemy z ogromną
                            starannością i
                            zaangażowaniem, by sprostać nawet najwyższym oczekiwaniom.
                            Nasza praca to Nasza pasja, dzięki temu wykonujemy ją z przyjemnością i uśmiechem co
                            przekłada
                            się
                            na miłą i przyjazną atmosferę w Naszym Studio.</StyledParagraph>
                        <ImageContainer>
                            <StyledImage src={src} sizes={sizes} srcSet={srcSet}/>
                        </ImageContainer>
                    </Content>
                </InnerContainer>
            </PageSection>
        </>
    )
}

export default About