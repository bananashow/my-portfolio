import { useEffect } from "react";
import { styled } from "styled-components";
import { skillImages } from "../data.js";
import { GradientButton } from "../components/GradientButton";
import backgd from "../assets/skill_background.png";

export const TechStack = () => {
  useEffect(() => {
    const importedImages = [];
    skillImages.forEach((category) => {
      category.skillInfo.forEach((skill) => {
        const importedImage = require(`../assets/skills/${skill.images}`);
        importedImages.push(importedImage);
      });
    });
  }, []);

  return (
    <>
      <TechStackContainer backgd={backgd} id="techStackSection">
        <AlignBox>
          <h2>TECH STACK</h2>
          {skillImages.map((category, idx) => {
            return (
              <div key={idx}>
                <div className="buttonWrap">
                  <GradientButton>
                    # {category.category.toUpperCase()}
                  </GradientButton>
                </div>
                <Images>
                  {category.skillInfo.map((skill, idx) => {
                    const imageSrc = require(`../assets/skills/${skill.images}`);
                    return (
                      <div key={idx} className="skills">
                        <div className="tooltip">
                          <img src={imageSrc} alt={skill.content} />
                          <span className="tooltiptext">
                            <strong>[ {skill.title} ]</strong>
                            <br />
                            {skill.content}
                          </span>
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
  background: url(${(props) => props.backgd}) fixed;
  background-size: 80%;
  height: 100%;
  color: white;
  display: flex;
`;

const AlignBox = styled.div`
  margin: 0 auto;
  padding-bottom: 36px;

  & > div {
    @media (max-width: 938px) {
      margin: 12px;
    }
  }

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

  .buttonWrap {
    font-size: 20px;
    margin: 48px 0 16px 0;
    padding: 0 14px;
  }
`;

const Images = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 4px;

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
        font-size: 13px;
        width: 150px;
        height: 60px;
        background-color: rgba(19, 21, 24, 0.9);
        border: 1px solid #0d0a2b;
        color: #fff;
        text-align: center;
        border-radius: 12px;
        padding: 8px;
        position: absolute;
        z-index: 99999;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
