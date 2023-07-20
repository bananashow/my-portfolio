import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const ScrollBar = ({ children }) => {
  const scrollY = useRef(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const browserHeight = window.innerHeight;
      scrollY.current = document.documentElement.scrollTop;
      const percent = `${
        (scrollY.current / (documentHeight - browserHeight)) * 100
      }%`;
      targetRef.current.style.width = percent;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollBarBody>
        <div className="scroll-outer">
          <div className="scroll-inner" ref={targetRef} percent={0}></div>
        </div>
        <div className="children-components">{children}</div>
      </ScrollBarBody>
    </>
  );
};

const ScrollBarBody = styled.div`
  .scroll-outer {
    position: fixed;
    width: 100%;
    height: 10px;
    border-radius: 14px;
    top: 10px;
    transform: translateY(-50%);
    background-color: gray;
    z-index: 9999;
  }

  .scroll-inner {
    width: ${(props) => props.percent};
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #a55970;
    border-radius: 14px;
  }

  .children-components {
    width: 100%;
    margin: 0 auto;
  }
`;
