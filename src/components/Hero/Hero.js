import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Container} from "../../styles/GlobalStyle";

const SliderWrapper = styled.div`
  overflow: hidden;
`;

const StyledSlide = styled.div`
  position: relative;
  height: 40rem;
  width: 100%;

  :active,
  :focus {
    outline: none;
  }

  @media screen and (min-width: 992px) {
    height: 60rem;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 50%;
  color: #fff;
  transform: translateX(-50%);
  z-index: 1;
`

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3);
  z-index: 0;
`

const StyedSlider = styled(Slider)`
  display: flex;
`


const Hero = () => {

    const query = graphql`
        {
            allDatoCmsSlider {
                nodes {
                    heading
                    description
                    sliderImage {
                        fluid {
                            src
                            sizes
                            srcSet
                        }
                    }
                }
            }
        }
    `

    const {allDatoCmsSlider: {nodes: sliders}} = useStaticQuery(query)
    console.log(sliders)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SliderWrapper>
            <StyedSlider {...settings}>
                {sliders.map(slider => (
                    <StyledSlide>
                        <StyledContainer>
                            <h1>{slider.heading}</h1>
                            <h2>{slider.description}</h2>
                        </StyledContainer>
                        <StyledOverlay/>
                        <StyledImage src={slider.sliderImage.fluid.src} sizes={slider.sliderImage.fluid.sizes}
                                     srcSet={slider.sliderImage.fluid.srcSet}/>
                    </StyledSlide>
                ))}
            </StyedSlider>
        </SliderWrapper>
    );
};

export default Hero;
