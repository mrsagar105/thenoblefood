import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../styles/Container.styled";
import DonateCards2 from "../components/DonateCards2";

export default function Donate() {
  const [cards1, showCards1] = useState(true);
  const [cards2, showCards2] = useState(false);

  const handleCards = () => {
    showCards1(false);
    showCards2(true);
  };
  return (
    <>
      <Navbar />

      <HeroSection>
        {/* <BackgroungImg src="images/stripe.png" alt=""></BackgroungImg> */}
        <img src="images/stripe.png" alt="" />
        <Container>
          <Content>
            <div>
              <div>
                <h2>
                  Donate<span> unused food.</span>
                </h2>
              </div>
              {cards1 && (
                <Cards1>
                  <Card>
                    <img src="images/chapati.png" alt="" />
                    <div>
                      <p>No. of Chapati</p>
                      <input type="number" />
                    </div>
                  </Card>
                  <Card>
                    <img src="images/rice.png" alt="" />
                    <div>
                      <p>Rice (Kg)</p>
                      <input type="number" />{" "}
                    </div>
                  </Card>
                  <Card>
                    <img src="images/dal.png" alt="" />
                    <div>
                      <p>Dal (L)</p>
                      <input type="number" />{" "}
                    </div>
                  </Card>
                  <Card>
                    <img src="images/vegetables.png" alt="" />

                    <div>
                      {" "}
                      <p>Vegetables (Kg)</p>
                      <input type="number" />{" "}
                    </div>
                  </Card>
                  <Card>
                    <img src="images/others.png" alt="" />
                    <div>
                      {" "}
                      <p>Others (Kg)</p>
                      <input type="number" />{" "}
                    </div>
                  </Card>
                </Cards1>
              )}

              {cards2 && <DonateCards2 />}
              <ButtonStyle
                onClick={() => {
                  handleCards();
                }}
              >
                {cards2 ? "Submit" : "Next"}
              </ButtonStyle>
            </div>
          </Content>
        </Container>
      </HeroSection>
    </>
  );
}

// const MainWrapper = styled.div`
//   display: flex;
//   gap: 26px;
// `;

const HeroSection = styled.div`
  color: white;
  overflow: hidden;
  max-height: calc(100vh - 70px);
  position: relative;
  transition: filter 0.8s ease;

  /* ${Container} {
    display: flex;
    align-items: center;
    position: relative;
  } */

  & > img {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    right: 0;
    z-index: 0;
    animation: moveFromLeft 1s ease forwards 1.5s;

    @keyframes moveFromLeft {
      0% {
        left: 100%;
      }
      100% {
        left: 5%;
      }
    }
  }
`;

// const BackgroungImg = styled.img`
//   width: 900px;
//   height: 900px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   z-index: 200;
// `;

const Content = styled.div`
  position: relative;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 80px;
    height: calc(100vh - 90px);
  }

  h2 {
    animation: movefromtop 1.3s ease forwards;
    width: 550px;
    text-align: center;
    font-size: 75px;
    font-weight: 700;
    color: var(--black-text);
    line-height: 90px;
  }
  /* 
  @keyframes movefromtop {
    0% {
      top: 100%;
    }
    100% {
      top: 0%;
    }
  } */

  span {
    font-size: 75px;
    font-weight: 700;
    color: var(--primary-color);
    line-height: 90px;
    transform: translateY(100px);
    /* opacity: 0; */
    transition: all 1.5s ease;
    will-change: transform, opacity;
  }
`;

const ButtonStyle = styled.button`
  font-size: 18px;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  border: 2px solid black;
  color: white;
  background-color: black;
  padding: 12px 25px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: #bf2630;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 1;
    top: 0;
    z-index: -12;
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &::after {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: #e33f4a;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: -15;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }
  &:hover {
    border: 2px solid #bf2630;
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
    width: 150%;
  }
`;

const Cards1 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 35px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  img {
    width: 120px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    border: 0;
    border-bottom: 2px solid black;
    text-align: center;
    width: 100%;
  }

  input:focus {
    outline: none;
  }
`;
