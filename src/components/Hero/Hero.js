import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nailsImg from '../../images/nails.png';

const SliderWrapper = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled.div`
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

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <StyledSlider>
          <StyledImage src={nailsImg} />
        </StyledSlider>
        <StyledSlider>
          <StyledImage src={nailsImg} />
        </StyledSlider>
      </Slider>
    </SliderWrapper>
  );
};

export default Hero;
