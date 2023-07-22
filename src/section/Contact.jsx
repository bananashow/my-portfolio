import { styled } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SiTistory } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { ContactButton } from "../components/ContactButton";

export const Contact = () => {
  return (
    <>
      <ContactContainer id="contactSection">
        <h2>CONTACT</h2>
        <div className="my-info">
          <div>
            <ContactButton
              title="연락처"
              detail="010. 9942. 3853"
              icon={<BiSolidPhoneCall />}
            ></ContactButton>
          </div>
          <div>
            <ContactButton
              title="카카오톡"
              detail="오픈채팅"
              icon={<RiKakaoTalkFill />}
              url="https://open.kakao.com/o/sEsl2Owf"
            ></ContactButton>
          </div>
          <div>
            <ContactButton
              title="블로그"
              detail="ddiddibbung.tistory.com"
              icon={<SiTistory />}
              url="https://ddiddibbung.tistory.com"
            ></ContactButton>
          </div>
          <div>
            <ContactButton
              title="GitHub"
              detail="github.com/bananashow"
              icon={<AiFillGithub />}
              url="https://github.com/bananashow"
            ></ContactButton>
          </div>
        </div>
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #daa3ac;
  padding: 30px 0 200px 0;

  h2 {
    color: #ffffff;
    font-size: 48px;
    text-align: center;
    margin: 100px 0 64px 0;
  }

  .my-info {
    margin: 0 auto;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;

    @media (max-width: 860px) {
      height: auto;
      flex-direction: column;
      gap: 6px;
    }
  }
`;
