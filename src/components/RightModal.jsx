import { styled } from 'styled-components';

export const RightModal = ({ handleModal }) => {
  return (
    <>
      <Overlay onClick={() => handleModal(false)} />
      <Modal>
        <div className="history">
          <h2>저의 특별한 이력을 소개할게요.</h2>
          <h3>첫 번째 도전</h3>
          <p>
            퇴근 후에는 취미로 다양한 것들을 배우는 것을 좋아했습니다. 한 달 정도 일본어 학원을 다니게 되었고, 그
            과정에서 해외에서 살아보고 싶다는 열망이 생겼습니다. 그러던 중 워킹 홀리데이 제도를 알게 되었고, 히라가나만
            읽을 줄 아는 수준밖에 되지 않았지만 기회가 다시 오지 않을 것 같은 생각에 무작정 떠났습니다. <br /> 출국 후,
            구매대행 회사에 취직하여 3년 동안 포토샵을 다루는 업무를 해왔으며, 최종적으로는 팀장의 책임을 맡게
            되었습니다.
          </p>
          <h3>두 번째 도전</h3>
          <p>
            결혼과 출산을 위해 한국으로 돌아 왔고, 일본에 가기 전 계속 해왔던 병원 업무로 다시 복직했습니다. <br />
            병원 업무는 주로 비효율적으로 반복되는 문서 작성 작업이 많았는데, 이에 대한 업무 자동화를 고민하던 중 우연히
            Python을 접하게 되었고, 30대 초반의 나이에 좋아하는 일을 뒤늦게 찾게 되었습니다. <br />
            병원을 떠나 국비로 6개월간 Java/Spring 백엔드 과정을 수료했고, 그 후에는 원하던 IT 회사에 취업하게 되었지만,
            개발팀은 아니었습니다.
          </p>
          <h3>세 번째 도전</h3>
          <p>
            6개월 동안 진행된 제로베이스 부트캠프 프론트엔드 과정을 성공적으로 마치고, 현재는 개발자의 직업을 가지게
            되었습니다. 개발 분야에서의 전문성을 높이기 위해 개발자 커뮤니티에서 적극적으로 활동하고, 다른 개발자들과의
            교류를 통해 더 나은 프론트엔드 개발자로 성장하기 위해 끊임없이 노력하고 있습니다. 새로운 기술에 대한 열정과
            지속적인 자기 계발을 통해, 미래의 프론트엔드 개발 분야에서 빛날 준비를 하고 있습니다.
          </p>
        </div>
        <span className="x-button" onClick={() => handleModal(false)}>
          X
        </span>
      </Modal>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.5);
`;

const Modal = styled.section`
  z-index: 10000;
  background-color: #292626;
  width: 800px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 12px;
  overflow: auto;

  .history {
    padding: 32px 48px;
    color: white;

    h2 {
      font-size: 36px;
      padding: 32px 0;

      @media (max-width: 768px) {
        font-size: 20px;
        padding: 12px 0;
      }
    }

    h3 {
      margin: 24px 0;
      padding: 10px 8px;
      border: 2px solid white;
      border-bottom-right-radius: 8px;
      display: inline-block;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      margin: 0 0 12px 0;
      line-height: 28px;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .x-button {
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    padding: 3px 8px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    user-select: none;
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

  @media (max-width: 768px) {
    width: 400px;
    font-size: 12px;
  }
`;
