import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../styles/Container.styled";
import axios from "axios";

export default function OrderDetails(id) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = localStorage.getItem("users");
      data = JSON.parse(data);
      setUser(data);
    };

    fetchData();
  }, []);

  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      let id = await JSON.parse(localStorage.getItem("orderId"));
      // fetching particular order
      const res = await axios.get(
        `https://hackathon-masai.herokuapp.com/orders/${id}`
      );
      setOrder(res.data);
      console.log("res.data: ", res.data);
      setName(res.data.userId.name);
    };
    fetchPost();
  }, []);

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
                  Order <span> Details</span>
                </h2>
              </div>

              <Cards1>
                <Card>
                  <img src="images/vegetables.png" alt="" />
                  <h3>
                    Meals for <span>5</span> people
                  </h3>
                  <div>
                    <div>
                      Donated by <span>{name}</span>
                    </div>
                    <div>
                      Serving By <span>{user.name}</span>
                    </div>
                  </div>

                  <TrackContainer>
                    <ImageLocation>
                      <img src="images/vegetables.png" alt="" />
                    </ImageLocation>
                    <Line />
                    <Circles>
                      <Circle></Circle>
                      <Circle></Circle>
                      <Circle></Circle>
                      <Circle></Circle>
                    </Circles>
                    <TrackDivs>
                      <div>
                        <p>Order Placed</p>
                        <p>12 mins ago</p>
                      </div>
                      <div>
                        <p>Order Accepted</p>
                        <p>10 mins ago</p>
                      </div>
                      <div>
                        <p>On their way</p>
                        <p>2 kms</p>
                      </div>
                      <div>
                        <p>Order Served</p>
                        <p>5 mins ago</p>
                      </div>
                    </TrackDivs>
                  </TrackContainer>

                  <Address>
                    <p>
                      <span>Address: </span>
                    </p>
                    <p>{order.currentLocation}</p>
                  </Address>
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
    animation: moveFromLeft 1s ease forwards;

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

const Cards1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 100px;
`;

const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 35px;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  transition: all 0.5s ease;

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

  div > span {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

const TrackContainer = styled.div`
  position: relative;
`;

const TrackDivs = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 500px;
  margin-top: 50px;

  > div {
    background-color: var(--secondary-color);
    padding: 20px;
    border-radius: 20px;
    align-self: flex-start;
    min-width: 180px;
  }

  > div:nth-child(even) {
    align-self: flex-end;
  }
`;

const Circles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 115px;
  width: 500px;
  margin-top: 50px;
  position: absolute;
  top: 45px;
  left: 240px;
  justify-content: center;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 50px;
`;

const Line = styled.div`
  width: 1px;
  height: 400px;
  border: 1px dashed #afa99c;
  position: absolute;
  top: 100px;
  left: 247px;
`;

const ImageLocation = styled.div`
  position: absolute;
  top: 70px;
  left: 220px;
  z-index: 2;
  animation: movefromtop 2s ease forwards 0.3s;

  img {
    width: 50px;
    transform: rotate(0deg);
    animation: rotate 2s ease forwards 0.3s;
  }

  @keyframes movefromtop {
    0% {
      top: 10%;
    }
    100% {
      top: 60%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Address = styled.div`
  span {
    color: var(--primary-color);
  }
`;
