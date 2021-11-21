import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8800/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("users", JSON.stringify(res.data));
      navigate(-1);
    } catch (err) {
      alert("Cannot register: ", err);
    }
  };

  let navigate = useNavigate();
  return (
    <>
      <OuterContainer>
        <Logo src="images/logo.png" alt="Logo"></Logo>
        <Leaves1 src="images/leaves.png" alt="Logo"></Leaves1>
        <Leaves2 src="images/leaves.png" alt="Logo"></Leaves2>
        <Cross
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src="images/cross.svg" alt="" />
        </Cross>
        <Container>
          <LeftSection>
            <div>
              <img src="images/food-plate.png" alt="" />
              <h3>
                Giving is not just about making a donation but
                <span> making a difference</span>
              </h3>
            </div>
          </LeftSection>
          <RightSection>
            <Heading>
              <h2>Log In</h2>
            </Heading>
            <MyForm>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  id="image"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  id="image"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </MyForm>

            <SignUpBtn class="add_button" onClick={handleSubmit}>
              Log In
            </SignUpBtn>
          </RightSection>
        </Container>
      </OuterContainer>
    </>
  );
}

const OuterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 4px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 20px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 15px;
  left: 150px;
`;

const LeftSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 540px;
    height: 580px;
    border-radius: 300px;
    background-color: var(--border-color);
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 50px;
  }

  h3 {
    width: 500px;
    font-size: 30px;
    font-family: "Indie Flower";
  }

  span {
    width: 300px;
    font-size: 30px;
    font-family: "Indie Flower";
    color: var(--primary-color);
  }

  img {
    height: 550px;
    animation: goround 40s infinite linear;
    transform: rotate(0deg);
    position: relative;
    top: 12px;
  }

  @keyframes goround {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const RightSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const MyForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 15px;

  & > div {
    display: flex;
    flex-direction: column;
  }

  input[type="text"],
  input[type="number"] {
    height: 60px;
    padding: 20px;
    font-family: Poppins;
    border: 2px solid var(--black-text);
    background-color: transparent;
    border-radius: 50px;
    margin-bottom: 10px;
  }

  input[type="text"]:focus,
  input[type="number"]:focus {
    border: 2px solid var(--primary-color);
    outline: none;
  }

  input::placeholder {
    font-size: 16px;
    opacity: 1;
    font-weight: 400;
    text-align: center;
  }
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: 200;
  text-align: center;
  padding: 20px;

  h2 {
    position: relative;
    color: #000000;
  }

  h2::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 20px;
    left: -20px;
    right: 20px;
    width: 280px;
    height: 80px;
    color: red;
    background-color: var(--primary-color);
    z-index: -1;
    clip-path: polygon(0 10%, 100% 0, 96% 100%, 3% 88%);
  }
`;

const SignUpBtn = styled.button`
  font-size: 18px;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  border: 2px solid var(--black-text);
  color: var(--black-text);
  width: 150px;
  height: 150px;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: black;
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
    background: #bf2630;
    position: absolute;
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: -15;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }
  &:hover {
    color: white;
    border: 2px solid black;
  }
  &:hover img {
    filter: invert(1);
  }
  &:hover::before,
  &:hover::after {
    opacity: 1;
    width: 150%;
  }
`;

const Cross = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    height: 40px;
  }

  &:hover {
    transform: rotate(90deg);
  }
`;

const Leaves1 = styled.img`
  position: absolute;
  top: -30px;
  left: -30px;
  width: 250px;
  transform: rotate(70deg);
`;

const Leaves2 = styled.img`
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 250px;
`;
