import React from "react";
import styled from "styled-components";

export default function DonateCards2() {
  return (
    <>
      <Cards2>
        <Card>
          <img src="images/chapati.png" alt="" />
          <div>
            <p>Raw</p>
            <input type="checkbox" />
          </div>
        </Card>
        <Card>
          <img src="images/rice.png" alt="" />
          <div>
            <p>Cooked</p>
            <input type="checkbox" />{" "}
          </div>
        </Card>
        <Card>
          <img src="images/dal.png" alt="" />
          <div>
            <p>Veg</p>
            <input type="checkbox" />{" "}
          </div>
        </Card>
        <Card>
          <img src="images/vegetables.png" alt="" />

          <div>
            {" "}
            <p>Non Veg</p>
            <input type="checkbox" />{" "}
          </div>
        </Card>
      </Cards2>
    </>
  );
}

const Cards2 = styled.div`
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
