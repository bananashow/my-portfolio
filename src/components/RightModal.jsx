import { styled } from "styled-components";

export const RightModal = ({ handleModal }) => {
  return (
    <>
      <Overlay onClick={() => handleModal(false)} />
      <Modal>
        <div className="history">
          <h2>저의 특별한 이력을 소개할게요.</h2>
          <h3>첫 번째 도전</h3>
          <p>
            퇴근 후에는 취미로 여러 분야를 배우는 것을 즐겨왔습니다. 그러던 중에
            한 달 만에 일본어 학원을 다니게 되었는데, 해외에서 생활해 보고
            싶다는 열망 하나로 워킹 홀리데이를 결심했습니다. 비록 제 일어 실력은
            히라가나 수준밖에 되지 않았지만, 그럼에도 사직서를 작성하고 모든
            것을 버리고 떠났습니다. 이후 구매대행 회사에 취직하여 3년 동안
            꾸준히 일을 해왔으며, 최종적으로는 팀장의 책임을 맡게 되었습니다.
          </p>
          <h3>두 번째 도전</h3>
          <p>
            결혼과 출산을 위해 한국으로 돌아왔습니다. 일본에 가기 전에도 계속
            해왔던 직업으로 다시 복직하였습니다. 병원 업무에서는 비효율적으로
            반복되는 문서 작성 작업이 많았는데, 이에 대한 업무 자동화를 고민하던
            중 우연히 Python을 접하게 되었습니다. 30대 초반의 나이었지만
            좋아하는 일을 찾게 되었죠. 병원을 떠나고 국비로 6개월간 Java/Spring
            백엔드 과정을 수료했고, 이후에는 원하던 IT 회사에 취업하게 되었지만,
            개발팀은 아니었습니다.
          </p>
          <h3>세 번째 도전</h3>
          <p>
            현재는 6개월 동안 진행되는 부트캠프 프론트엔드 과정에 참여하고
            있습니다. 지금까지의 여정은 정말 멀고 험난했지만, 그만큼 프론트엔드
            개발자로서의 목표를 향해 밤낮 없이 노력하고 있습니다.
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
  height: 100vh;
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
  }
`;
