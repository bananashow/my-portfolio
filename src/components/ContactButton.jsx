import { styled } from "styled-components";

export const ContactButton = ({ title, detail, icon, url }) => {
  const handleEmailSend = (email) => {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  };

  const handleLink = (url) => {
    if (!url) {
      handleEmailSend("bananaqick@gmail.com");
      return;
    }

    window.open(url);
  };

  return (
    <div onClick={() => handleLink(url)}>
      <MyInfo>
        <h3>
          <span>{icon}</span>
          {title}
        </h3>
        <p>{detail}</p>
      </MyInfo>
    </div>
  );
};

const MyInfo = styled.div`
  min-width: 200px;
  height: 90px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  margin: 0 4px;
  cursor: pointer;

  background-color: #faf6ff;
  border: 4px solid #4d386d;
  border-radius: 12px;
  transition: all 0.4s;

  &:hover {
    background-color: #3f3351;
    color: white;
  }

  span {
    font-size: 18px;
    margin-right: 4px;
  }

  p {
    font-size: 14px;
    margin-top: 8px;

    @media (max-width: 860px) {
      font-size: 18px;
      margin-top: 2px;
    }
  }
`;
