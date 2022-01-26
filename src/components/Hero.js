import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  // console.log(current);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   };
  //   timeout.current = setTimeout(nextSlide, 3000);
  //   return () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <Container>
      <Content>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>
                      <span>$</span>
                      {slide.price}
                    </p>
                    <button to={slide.path}>{slide.label}</button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderArrow>
          <LeftArrow onClick={prevSlide} fontSize="large" />
          <RightArrow onClick={nextSlide} fontSize="large" />
        </SliderArrow>
      </Content>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  /* top: 60px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeroSlider = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: yellow;
  margin-left: 20px;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 10px;
  }

  span {
    margin-right: 4px;
  }
  p {
    font-size: 20px;
    text-align: left;
  }

  button {
    margin-top: 15px;
    width: 100px;
    height: 40px;
    background: transparent;
    border: none;
    color: black;
    background-color: lightgray;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`;

const SliderArrow = styled.div`
  position: absolute;
  bottom: 100px;
  right: 50px;
  display: flex;
  z-index: 100;
`;

const RightArrow = styled(ArrowCircleRightIcon)`
  color: yellow;
  font-size: 50px !important;
  cursor: pointer;
`;

const LeftArrow = styled(ArrowCircleLeftIcon)`
  color: white;
  font-size: 50px !important;
  cursor: pointer;
`;
