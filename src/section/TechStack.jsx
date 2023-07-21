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
                        <div>
                          <img src={imageSrc} alt="skills" />
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

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Images = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

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

    div {
      &:hover::after {
        content: "";
        width: 160px;
        height: 80px;
        background-color: white;
        position: absolute;
        z-index: 99;
        top: 110px;
        left: -20px;
        border-radius: 12px;
      }
    }
  }
`;
