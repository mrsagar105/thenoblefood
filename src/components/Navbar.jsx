import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = localStorage.getItem("users");
      data = JSON.parse(data);
      setUser(data);
    };

    fetchData();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("users");
  }

  // function handleShowLogin() {
  //   if (showLogin) {
  //     setShowLogin(false);
  //   } else {
  //     if (showSignUp) {
  //       setShowSignUp(false);
  //     }
  //     setShowLogin(true);
  //   }
  // }

  return (
    <NavSection>
      <Container>
        <Logo src="images/logo.png" alt="Instagram" />
        <NavWrap>
          <nav>
            <Link to="/" href="index.html">
              Home
            </Link>
            <Link to="/donate" href="#work_section">
              Donate Food
            </Link>
            <Link to="/serve" href="#tools_and_skills">
              Serve People
            </Link>
            <Link to="/" href="#contact">
              Contact
            </Link>
          </nav>
        </NavWrap>

        {user ? (
          <Link to="/">
            <LoginBtn onClick={handleLogOut}>
              LogOut
              <img src="images/user.png" alt="" />
            </LoginBtn>
          </Link>
        ) : (
          <RightButtons>
            <Link to="/login">
              <LoginBtn>
                Login
                <img src="images/user.png" alt="" />
              </LoginBtn>
            </Link>
            <Link to="/signup">
              <SignUpBtn>
                Signup
                <img src="images/fingerprint.png" alt="" />
              </SignUpBtn>
            </Link>
          </RightButtons>
        )}
      </Container>
    </NavSection>
  );
}

const NavSection = styled.header`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  color: #000000;
  font-size: 20px;

  ${Container} {
    max-width: 1650px;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button {
    font-size: 18px;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 10;
  }
`;

const Logo = styled.img`
  margin-top: 6px;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;

  img {
    width: 22px;
    display: block;
  }

  a {
    font-size: 20px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 400;
  }

  nav {
    display: flex;
    max-width: 600px;
    justify-content: space-around;
    flex: 1;
  }
`;

const RightButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const LoginBtn = styled.button`
  border: 2px solid black;
  color: black;
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

const SignUpBtn = styled.button`
  border: 2px solid black;
  background-color: black;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
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
