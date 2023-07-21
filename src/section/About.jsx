import { styled } from "styled-components";
import { BasicButton } from "../components/BasicButton";
import { AiOutlineRight } from "react-icons/ai";
import { RightModal } from "../components/RightModal";
import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import dreamImage from "../assets/dream.png";

export const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = (bool) => {
    setIsOpen(bool);
  };

  const [dreamRefState, setDreamRefState] = useState(false);
  const [produceRefState, setProduceRefState] = useState(false);

  const dreamRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setDreamRefState(entry.isIntersecting);
      });
    },
    { rootMargin: "-10px" }
  );

  const produceRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        setProduceRefState(entry.isIntersecting);
      });
    },
    { rootMargin: "-10px" }
  );

  return (
    <>
      <AboutContainer>
        <div className="modal-position">
          <ImageBox $imageURL={dreamImage}>
            <div className="dream-image">
              <h2
                ref={dreamRef}
                className={dreamRefState ? "opacity-animation" : ""}
              >
                Dreams <br /> <span>and</span> <br />
                New Beginnings
              </h2>

              <p
                ref={produceRef}
                className={produceRefState ? "from-left-animation" : ""}
              >
                <b>프론트엔드 개발자를 꿈꾸는 '정지혜' 입니다.</b>
                <br />
                저는 디자인과 개발에 큰 관심을 가지고 있으며, <br />
                배운 기술을 활용하여 <b>재미있는 것</b>을 구현해 나가는 과정을
                즐깁니다. <br />
                새로운 시도를 두려워 하지 않고, 끊임없이 도전하여 성장하기 위해
                노력합니다.
                <br />
                더 나은 사용자 경험을 제공하기 위해 노력하는 것이 저의
                목표입니다.
                <br />
              </p>
              <div className="button-box" onClick={() => handleModal(true)}>
                <BasicButton
                  $fontColor="white"
                  $backgdColor="#312055"
                  $hoverColor="#3c2869"
                >
                  더 알아보기
                  <AiOutlineRight />
                </BasicButton>
              </div>
            </div>
          </ImageBox>
          {isOpen && <RightModal handleModal={handleModal} isOpen={isOpen} />}
        </div>
      </AboutContainer>
    </>
  );
};

const AboutContainer = styled.section`
  background-color: #151417;
  width: 100%;
  min-height: 100vh;

  .modal-position {
    position: relative;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  min-height: 100%;
  max-width: 1400px;
  margin: 0 auto;

  .dream-image {
    min-height: 100vh;
    background: url(${(props) => props.$imageURL}) fixed no-repeat center;
    background-size: 1200px 890px;
    padding: 32px;

    h2 {
      color: #ed8d8d;
      font-size: 120px;
      font-weight: 900;
      line-height: 100px;
      padding: 32px 0 0 120px;

      &.opacity-animation {
        animation: opacity 4s;

        @keyframes opacity {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }

      span {
        font-weight: 200;
      }
    }

    p {
      margin-top: 120px;
      color: white;
      padding-top: 32px;
      padding-left: 160px;
      line-height: 36px;
      font-size: 22px;
      font-weight: 300;

      &.from-left-animation {
        animation: fromLeft 2s;
        @keyframes fromLeft {
          0% {
            padding-left: 0;
          }
          100% {
            padding-left: 160px;
          }
        }
      }
    }

    .button-box {
      margin: 40px 0 0 160px;
    }
  }

  @media (max-width: 1094px) {
    .dream-image {
      background-size: cover;
      background-position: top;

      h2 {
        font-size: 70px;
        padding: 16px 0 0 60px;
      }

      p {
        margin-top: 38px;
        padding-left: 60px;
        font-size: 18px;
        line-height: 36px;

        &.from-left-animation {
          animation: fromLeft 2s;
          @keyframes fromLeft {
            0% {
              padding-left: 0;
            }
            100% {
              padding-left: 60px;
            }
          }
        }
      }

      .button-box {
        margin: 48px 0 0 60px;
      }
    }
  }

  @media (max-width: 768px) {
    .dream-image {
      background: #1b1b1b;

      h2 {
        font-size: 36px;
        line-height: 60px;
        padding: 150px 0 0 40px;
      }

      p {
        margin: 10px 16px 0 0;
        padding-left: 40px;
        font-size: 14px;
        line-height: 24px;
      }

      &.from-left-animation {
        animation: fromLeft 2s;
        @keyframes fromLeft {
          0% {
            padding-left: 0;
          }
          100% {
            padding-left: 40px;
          }
        }
      }

      .button-box {
        scale: 0.9;
        margin: 48px 0 0 24px;
      }
    }
  }
`;
