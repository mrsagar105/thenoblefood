import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Container } from "../styles/Container.styled";
import DonateCards2 from "../components/DonateCards2";
import DonateCards3 from "../components/DonateCards3";
import Geocode from "react-geocode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Donate() {
  const [cards1, showCards1] = useState(true);
  const [cards2, showCards2] = useState(false);
  const [cards3, showCards3] = useState(false);
  const [chapati, setChapati] = useState(false);
  const [rice, setRice] = useState(false);
  const [dal, setDal] = useState(false);
  const [vegetables, setVegetables] = useState(false);
  const [others, setOthers] = useState(false);

  const [raw, setRaw] = useState(false);
  const [cooked, setCooked] = useState(false);
  const [veg, setVeg] = useState(false);
  const [nonveg, setNonveg] = useState(false);

  const [location, setLocation] = useState(false);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [address, setAddress] = useState(null);

  const [food1, setFood1] = useState({});
  const [food2, setFood2] = useState({});

  let navigate = useNavigate();

  const handleGeoLoaction = () => {
    Geocode.setApiKey("AIzaSyCgdmJK-8o0EalNmY0EQHsoae4J797WVK0");
    Geocode.enableDebug();

    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setAddress(address);
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
      handleGeoLoaction();
    }
  };

  const handleCards = () => {
    if (cards1 === true) {
      let food = {
        chapatiQuantity: chapati,
        riceQuantity: rice,
        dalQuantity: dal,
        vegetablesQuantity: vegetables,
        others: others,
      };
      setFood1(food);
      showCards1(false);
      showCards2(true);
    }

    if (cards2 === true) {
      let food2 = {
        isRaw: raw,
        isCooked: cooked,
        isVeg: veg,
        isNonVeg: nonveg,
      };
      setFood2(food2);
      showCards2(false);
      showCards3(true);
    }

    if (cards3 === true) {
      showCards3(false);
      // get user id
      let users = localStorage.getItem("users");
      users = JSON.parse(users);
      console.log("users: ", users);
      let userId = users._id;
      console.log("userId: ", userId);
      let data = {
        ...food1,
        ...food2,
        currentLocation: address,
        userId: userId,
      };
      axios.post(`http://localhost:8800/api/orders/`, data);
      navigate("/");
    }
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
                  <Card1>
                    <img src="images/chapati.png" alt="" />
                    <div>
                      <p>No. of Chapati</p>
                      <input
                        type="number"
                        onChange={(e) => setChapati(e.target.value)}
                      />
                    </div>
                  </Card1>
                  <Card2>
                    <img src="images/rice.png" alt="" />
                    <div>
                      <p>Rice (Kg)</p>
                      <input
                        type="number"
                        onChange={(e) => setRice(e.target.value)}
                      />{" "}
                    </div>
                  </Card2>
                  <Card3>
                    <img src="images/dal.png" alt="" />
                    <div>
                      <p>Dal (L)</p>
                      <input
                        type="number"
                        onChange={(e) => setDal(e.target.value)}
                      />{" "}
                    </div>
                  </Card3>
                  <Card4>
                    <img src="images/vegetables.png" alt="" />

                    <div>
                      {" "}
                      <p>Vegetables (Kg)</p>
                      <input
                        type="number"
                        onChange={(e) => setVegetables(e.target.value)}
                      />{" "}
                    </div>
                  </Card4>
                  <Card5>
                    <img src="images/others.png" alt="" />
                    <div>
                      {" "}
                      <p>Others (Kg)</p>
                      <input
                        type="number"
                        onChange={(e) => setOthers(e.target.value)}
                      />{" "}
                    </div>
                  </Card5>
                </Cards1>
              )}

              {cards2 && (
                <DonateCards2
                  setRaw={setRaw}
                  setCooked={setCooked}
                  setVeg={setVeg}
                  setNonveg={setNonveg}
                />
              )}

              {cards3 && <DonateCards3 getLocation={getLocation} />}
              <ButtonStyle onClick={handleCards}>
                {cards3 ? "Submit" : "Next"}
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

  // card
  & > div {
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
  }
`;

const Card1 = styled.div`
  position: relative;
  top: 100px;
  animation: slideup 0.5s ease forwards;
`;

const Card2 = styled.div`
  position: relative;
  top: 100px;
  animation: slideup 0.5s ease forwards;
`;
const Card3 = styled.div`
  position: relative;
  top: 100px;
  animation: slideup 0.5s ease forwards 0.1s;
`;
const Card4 = styled.div`
  position: relative;
  top: 100px;
  animation: slideup 0.5s ease forwards 0.15s;
`;
const Card5 = styled.div`
  position: relative;
  top: 100px;
  animation: slideup 0.5s ease forwards 0.2s;

  @keyframes slideup {
    0% {
      top: 100px;
    }
    100% {
      top: 0px;
    }
  }
`;
