import { styled } from "styled-components";
import logo from "../assets/my_logo.png";

export const Logo = () => {
  return (
    <>
      <LogoImage>
        <img src={logo} alt="logo" />
      </LogoImage>
    </>
  );
};

const LogoImage = styled.div`
  z-index: 999;
  position: fixed;
  top: 25px;
  left: 10px;
  width: 100px;
  height: 100px;

  img {
    width: 80px;
    padding: 8px 12px;

    @media (max-width: 768px) {
      width: 36px;
    }
  }
`;
