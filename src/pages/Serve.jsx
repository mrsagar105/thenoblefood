import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../styles/Container.styled";
import DonateCards2 from "../components/DonateCards2";

export default function Serve() {
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
                  Foods ready <span> to be served</span> in your area
                </h2>
              </div>

              <Cards1>
                <Card>
                  <img src="images/vegetables.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>
                <Card>
                  <img src="images/cooked.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>{" "}
                <Card>
                  <img src="images/vegetables.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>{" "}
                <Card>
                  <img src="images/others.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>{" "}
                <Card>
                  <img src="images/vegetables.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>{" "}
                <Card>
                  <img src="images/cooked.png" alt="" />
                  <h3>
                    Meals for 2 people by <span>Sagar</span>
                  </h3>
                  <FoodDetails>
                    <div>
                      <p>Chapati</p>
                      <p>5</p>
                    </div>
                    <div>
                      <p>Rice</p>
                      <p>2kg</p>
                    </div>
                    <div>
                      <p>Location</p>
                      <Address>
                        5 Block, Krishna Nagar, Mul Road, Chandrapur
                      </Address>
                    </div>
                  </FoodDetails>
                  <BottomDetail>
                    <p>raw</p>
                    <p>2km</p>
                    <p>veg</p>
                  </BottomDetail>
                  <ButtonStyle>Serve</ButtonStyle>
                </Card>
              </Cards1>
            </div>
          </Content>
        </Container>
      </HeroSection>
    </>
  );
}

const HeroSection = styled.div`
  color: white;
  overflow: hidden;
  min-height: calc(100vh - 70px);
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

const Content = styled.div`
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 80px;
    min-height: calc(100vh - 90px);
  }

  h2 {
    animation: movefromtop 1.3s ease forwards;
    width: 950px;
    text-align: center;
    font-size: 70px;
    font-weight: 700;
    color: var(--black-text);
    line-height: 90px;
    margin-top: 60px;
  }

  h2 > span {
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
  padding: 12px 55px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 25px;
  margin-bottom: 100px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 35px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px 0px rgb(0, 0, 0, 0.2);
  }

  img {
    width: 120px;
    margin-top: 10px;
  }

  h3 > span {
    color: var(--primary-color);
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

  h3 {
    font-size: 23px;
    font-weight: 500;
  }
`;

const FoodDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    p:nth-child(2) {
      text-align: right;
      color: var(--primary-color);
    }
  }
`;

const BottomDetail = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  p {
    color: var(--primary-color);
  }

  p:not(:last-child):after {
    content: "|";
    position: relative;
    left: 40px;
    color: #bebebe;
  }
`;

const Address = styled.p`
  font-size: 13px;
`;
