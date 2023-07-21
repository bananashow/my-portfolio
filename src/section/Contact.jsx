import { styled } from "styled-components";

export const Contact = () => {
  return (
    <>
      <ContactContainer>
        <h2>CONTACT</h2>
        {/* 깃헙, 블로그 주소, 전화번호, 이메일, */}
      </ContactContainer>
    </>
  );
};

const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  color: white;

  h2 {
    color: #ffffff;
    font-size: 48px;
    text-align: center;
    margin: 100px 0 64px 0;
  }
`;
