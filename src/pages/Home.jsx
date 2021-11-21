import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavHome from "../components/NavHome";
// import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";

export default function Home() {
  // let leftSection = useRef();
  // let rightSection = useRef();

  // useEffect(() => {
  //   console.log(leftSection);
  //   leftSection.current.style.top = "-200px";
  //   leftSection.current.style.opacity = "1";

  //   rightSection.current.style.bottom = "-10px";
  //   rightSection.current.style.opacity = "1";
  // }, []);

  return (
    <>
      <NavHome />

      <HeroSection>
        {/* <BackgroungImg src="images/stripe.png" alt=""></BackgroungImg> */}
        <img src="images/stripe.png" alt="" />
        <Container>
          <LeftSection>
            <div>
              <h2>
                An Innovative idea to deliver <span>unused foods.</span>
              </h2>
              <PurposeSection>
                <div>
                  <p>What's your purpose?</p>
                  <Link to="/donate">
                    <ButtonStyle>I want to donate food</ButtonStyle>
                  </Link>
                  <Link to="/serve">
                    <ButtonStyle>I want to serve people</ButtonStyle>
                  </Link>
                </div>
              </PurposeSection>
            </div>
          </LeftSection>
          <RightSection>
            <img src="images/hero-image.png" alt="" />
          </RightSection>
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

  ${Container} {
    display: flex;
    align-items: center;
    position: relative;
  }

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

const LeftSection = styled.div`
  position: relative;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 180px;
    height: calc(100vh - 90px);
    width: 600px;
  }

  h2 {
    position: relative;
    top: -70px;
    left: -100%;
    animation: moveimageLeft 1.3s ease forwards 1s;
  }

  @keyframes moveimageLeft {
    0% {
      left: -100%;
    }
    100% {
      left: 0%;
    }
  }

  h2 {
    font-size: 75px;
    font-weight: 700;
    color: var(--black-text);
    line-height: 90px;
    transform: translateY(100px);
    /* opacity: 0; */
    transition: all 1.5s ease;
    will-change: transform, opacity;
  }

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

// const RightSection = styled.div`
//   width: 30%;
//   /* background-color: black; */
//   position: absolute;
//   bottom: -10px;
//   left: 400px;

//   img {
//     height: 800px;
//   }
// `;
const RightSection = styled.div`
  width: 30%;
  /* background-color: black; */
  position: absolute;
  bottom: -900px;
  left: 40px;
  opacity: 0;
  animation: moveimage 2.8s ease forwards;

  @keyframes moveimage {
    0% {
      bottom: -900px;
      left: 40px;
      opacity: 0;
    }
    30% {
      bottom: -10px;
      left: 40px;
      opacity: 1;
    }
    40% {
      bottom: -10px;
      left: 40px;
      opacity: 1;
    }
    100% {
      bottom: -10px;
      left: 400px;
      opacity: 1;
    }
  }

  img {
    height: 800px;
  }
`;

const PurposeSection = styled.div`
  overflow: hidden;
  position: relative;
  top: -80px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    top: -100%;
    animation: movefromtop 1s ease forwards 1.5s;
  }

  @keyframes movefromtop {
    0% {
      top: -100%;
    }
    100% {
      top: 0%;
    }
  }

  p {
    font-size: 28px;
    font-weight: 600;
  }
`;

const ButtonStyle = styled.button`
  font-size: 18px;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  z-index: 10;
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
    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
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
    transition: all 0.5s cubic-bezier(0.2, 0.95, 0.57, 0.99);
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
