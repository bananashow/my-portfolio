import { styled } from "styled-components";

export const NavBar = () => {
  return (
    <>
      <NavigationBar>
        <ul>
          <li>INTRO</li>
          <li>ABOUT</li>
          <li>PROJECT</li>
          <li>CONTACT</li>
        </ul>
      </NavigationBar>
    </>
  );
};

const NavigationBar = styled.nav`
  position: fixed;
  right: 32px;
  top: 60%;
  height: 100vh;
  opacity: 0.7;
  z-index: 999;

  ul {
    text-align: center;
    li {
      padding: 8px 8px;
      margin: 8px 0;
      cursor: pointer;
      border: 2px solid rgb(83, 61, 112);
      color: #e7dbdb;
      border-radius: 8px;

      &:hover {
        transition: all 0.4s;
        background-color: rgb(133, 96, 182);
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
