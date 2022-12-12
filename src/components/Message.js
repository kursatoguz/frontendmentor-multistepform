import React from "react";
import styled from "styled-components";
import thankyouIcon from "../images/icon-thank-you.svg";
const Message = () => {
  return (
    <Wrapper>
      <div className="text">
        <img src={thankyouIcon} alt="thanksIcon" />
        <h1>Thank you!</h1>
        <p>
          {" "}
          Thanks for confirming your subscription. We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </Wrapper>
  );
};

export default Message;
const Wrapper = styled.div`
  margin: 1em auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
    color: var(--primary-marine-blue);
    font-size: 1.5rem;
    margin: 1em 0;
  }
  p {
    text-align: center;
    color: var(--secondary-cool-gray);
  }
`;
