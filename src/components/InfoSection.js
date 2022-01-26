import React from "react";
import styled from "styled-components";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <button to="/home">{buttonLabel}</button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 1rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 600px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  p {
    line-height: 1.6;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 35px;
  }

  button {
    width: 100px;
    height: 40px;
    background: transparent;
    border: none;
    color: black;
    background-color: lightgray;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 10px;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 1s ease-in-out;

    @media (max-width: 768px) {
      width: 99%;
      height: 99%;
    }
  }
`;

export default InfoSection;
