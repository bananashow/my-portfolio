import { useEffect } from "react";
import { styled } from "styled-components";
import { skillImages } from "../data.js";

export const TechStack = () => {
  useEffect(() => {
    const importedImages = [];
    skillImages.forEach((image) => {
      image.images.forEach((imageName) => {
        const importedImage = require(`../assets/skills/${imageName}`).default;
        importedImages.push(importedImage);
      });
    });
  }, []);

  return (
    <>
      <TechStackContainer>
        <AlignBox>
          <h2>TECH STACK</h2>
          {skillImages.map((category, idx) => {
            return (
              <div key={idx}>
                <h3># {category.category.toUpperCase()}</h3>
                <Images>
                  {category.images.map((imageName, idx) => {
                    const imageSrc = require(`../assets/skills/${imageName}`);
                    return (
                      <div key={idx} className="skills">
                        <div className="tooltip">
                          <img src={imageSrc} alt="skills" />
                          <span className="tooltiptext">테스트</span>
                        </div>
                      </div>
                    );
                  })}
                </Images>
              </div>
            );
          })}
        </AlignBox>
      </TechStackContainer>
    </>
  );
};

const TechStackContainer = styled.section`
  height: 100%;
  color: white;
  display: flex;
`;

const AlignBox = styled.div`
  /* width: 70%; */
  margin: 0 auto;

  img {
    width: 80px;
    height: 80px;
  }

  h2 {
    color: rgb(133, 96, 182);
    font-size: 48px;
    text-align: center;
    margin: 64px 0 64px 0;
  }

  h3 {
    font-size: 24px;
    margin: 48px 0 8px 12px;
    padding: 0 32px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Images = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 32px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바 길이 */
    background: #5e4d79; /* 스크롤바 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 배경색*/
  }

  .skills {
    padding: 16px;
    position: relative;

    .tooltip {
      position: relative;

      &:hover .tooltiptext {
        visibility: visible;
      }

      .tooltiptext {
        visibility: hidden;
        width: 140px;
        height: 60px;
        background-color: #fff;
        color: black;
        text-align: center;
        border-radius: 12px;
        padding: 8px;
        position: absolute;
        z-index: 99;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
