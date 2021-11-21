import React, { useState } from "react";
import styled from "styled-components";

export default function DonateCards3({ getLocation }) {
  return (
    <>
      <Wrap>
        <Cards2>
          <h3>Add current Location</h3>
          <div>
            <Card1>
              <div>
                <LocationBtn onClick={getLocation}>
                  Give Live Location
                </LocationBtn>
              </div>
            </Card1>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > div {
    display: flex;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 20px;
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

const LocationBtn = styled.div`
  padding: 10px 20px;
  background-color: var(--primary-color);
  border-radius: 50px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--black-text);
  }
`;
