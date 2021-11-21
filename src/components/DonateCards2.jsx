import React, { useState } from "react";
import styled from "styled-components";

export default function DonateCards2({ setRaw, setCooked, setVeg, setNonveg }) {
  return (
    <>
      <Wrap>
        <Cards2>
          <h3>Is food raw or cooked?</h3>
          <div>
            <Card1>
              <img src="images/raw.png" alt="" />
              <div>
                <p>Raw</p>
                <input
                  type="checkbox"
                  onChange={(e) => setRaw(e.target.checked)}
                />
              </div>
            </Card1>
            <Card2>
              <img src="images/cooked.png" alt="" />
              <div>
                <p>Cooked</p>
                <input
                  type="checkbox"
                  onChange={(e) => setCooked(e.target.checked)}
                />{" "}
              </div>
            </Card2>
          </div>
        </Cards2>
        <Cards2>
          <h3>Is food veg or non-veg?</h3>
          <div>
            <Card3>
              <img src="images/vegetables.png" alt="" />
              <div>
                <p>Veg</p>
                <input
                  type="checkbox"
                  onChange={(e) => setVeg(e.target.checked)}
                />{" "}
              </div>
            </Card3>
            <Card4>
              <img src="images/non-veg.png" alt="" />

              <div>
                {" "}
                <p>Non Veg</p>
                <input
                  type="checkbox"
                  onChange={(e) => setNonveg(e.target.checked)}
                />{" "}
              </div>
            </Card4>
          </div>
        </Cards2>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 80%;
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const Cards2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  > div {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;

    > div {
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
  }
`;

// const Card = styled.div`
//   background-color: white;
//   border-radius: 35px;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;

//   img {
//     width: 120px;
//   }

//   & > div {
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
//   }

//   input {
//     border: 0;
//     border-bottom: 2px solid black;
//     text-align: center;
//     width: 100%;
//   }

//   input:focus {
//     outline: none;
//   }
// `;

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

  @keyframes slideup {
    0% {
      top: 100px;
    }
    100% {
      top: 0px;
    }
  }
`;
