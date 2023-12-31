import { styled } from "styled-components";

export const GradientButton = (props) => {
  return <GradientBtn>{props.children}</GradientBtn>;
};

const GradientBtn = styled.div`
  width: 170px;
  padding: 8px;
  text-align: center;
  transition: 0.4s;
  background-size: 200% auto;
  color: white;
  font-size: 20px;
  box-shadow: 0 0 20px #553c66;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #2c295f 0%,
    #2a182e 51%,
    #531e3b 100%
  );

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }

  &:hover {
    background-position: right center;
  }
`;
