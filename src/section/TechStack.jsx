import { styled } from "styled-components";

export const TechStack = () => {
  return (
    <>
      <TechStackContainer>
        <AlignBox>
          <h2>TECH STACK</h2>
          <h3>없앨까...?</h3>
        </AlignBox>
      </TechStackContainer>
    </>
  );
};

const TechStackContainer = styled.section`
  height: 100vh;
  color: white;
`;

const AlignBox = styled.div`
  width: 650px;
  margin: 0 auto;

  h2 {
    color: rgb(133, 96, 182);
    font-size: 48px;
    text-align: center;
    margin: 64px 0 64px 0;
  }
`;
