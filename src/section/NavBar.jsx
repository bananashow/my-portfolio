import { Link } from "react-scroll";
import { styled } from "styled-components";

export const NavBar = () => {
  return (
    <>
      <NavigationBar>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="introSection"
              spy={true}
              smooth={true}
              duration={400}
            >
              INTRO
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="aboutSection"
              spy={true}
              smooth={true}
              duration={400}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="techStackSection"
              spy={true}
              smooth={true}
              duration={400}
            >
              TECH STACK
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projectSection"
              spy={true}
              smooth={true}
              duration={400}
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              duration={400}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </NavigationBar>
    </>
  );
};

const NavigationBar = styled.nav`
  position: fixed;
  right: 32px;
  top: 60%;
  height: contain;
  opacity: 0.7;
  z-index: 999;
  @media (max-width: 860px) {
    top: 12px;
    right: 0;
  }

  ul {
    text-align: center;
    li {
      padding: 8px 8px;
      margin: 8px 0;
      cursor: pointer;
      border: 2px solid rgb(83, 61, 112);
      color: #fff;
      border-radius: 8px;

      &:hover {
        transition: all 0.4s;
        background-color: rgb(133, 96, 182);
        color: white;
      }
    }

    @media (max-width: 860px) {
      li {
        padding: 2px 0;
        margin: 2px 0;
        scale: 0.8;
      }
    }
  }
`;
