import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Search({ handleLikes }) {
  return (
    <>
      <OuterContainer>
        <SearchContainer>
          <Users>
            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-0.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>dheeraj</h4>
                    </Link>
                    <p>Dheeraj Bisht</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-1.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>shivam_singh</h4>
                    </Link>
                    <p>Shivam Singh</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-2.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>sunny</h4>
                    </Link>
                    <p>Sunny</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-3.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>pulkit</h4>
                    </Link>
                    <p>Pulkit Tyagi</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-4.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>mahisingh</h4>
                    </Link>
                    <p>Mahima Singh</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-5.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>aniket</h4>
                    </Link>
                    <p>Aniket Singh</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-6.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>tarun</h4>
                    </Link>
                    <p>Tarun Singh</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-7.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>snehal</h4>
                    </Link>
                    <p>Snehal Kamble</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-8.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>saurav</h4>
                    </Link>
                    <p>Saurac ganguly</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-9.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>sehvag</h4>
                    </Link>
                    <p>Sehvag Singh</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>

            <Link to="/">
              <User>
                <ProfileSection>
                  <img src="images/user-10.jpg" alt="" />
                  <UsernameAndName>
                    <Link to="/">
                      <h4>sachin</h4>
                    </Link>
                    <p>Sachin</p>
                  </UsernameAndName>
                </ProfileSection>
              </User>
            </Link>
          </Users>
        </SearchContainer>
      </OuterContainer>
    </>
  );
}

const OuterContainer = styled.div`
  position: absolute;
  top: 50px;
`;

const SearchContainer = styled.div`
  width: 375px;
  height: 362px;
  border-radius: 12px;
  z-index: 50;
  position: relative;
  right: 50%;
  left: 50%;
  transform: translateX(-50%, -50%);
  background-color: white;
`;

const Users = styled.div`
  display: flex;
  flex-direction: column;
  height: 362px;
  overflow: hidden auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h4 {
    font-weight: 600;
  }

  p {
    color: #8e8e8e;
  }

  img {
    width: 44px;
    border-radius: 50px;
    margin-left: 4px;
  }
`;

const UsernameAndName = styled.div`
  display: flex;
  flex-direction: column;
`;
