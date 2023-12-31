import { styled } from "styled-components";
import logo from "../assets/my_logo.png";
import { Link } from "react-scroll";

export const Logo = () => {
  return (
    <>
      <LogoImage>
        <Link
          activeClass="active"
          to="introSection"
          spy={true}
          smooth={true}
          duration={400}
        >
          <img src={logo} alt="logo" />
        </Link>
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
  cursor: pointer;

  img {
    width: 80px;
    padding: 8px 12px;

    @media (max-width: 768px) {
      width: 36px;
    }
  }
`;
