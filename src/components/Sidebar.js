import React from "react";
import styled from "styled-components";
import Stepnames from "./Stepnames";
import desktopSidebar from "../images/bg-sidebar-desktop.svg";
import mobileSidebar from "../images/bg-sidebar-mobile.svg";
const Sidebar = ({ section }) => {
  const steps = ["your info", "select plan", "add-ons", "summary"];

  return (
    <Wrapper>
      <div className="steps">
        {steps.map((step, index) => {
          return (
            <Stepnames
              key={index}
              stepName={step}
              index={index}
              section={section}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 30%;
  height: 95%;
  background-image: url(${desktopSidebar});
  padding: 2em;
  margin: 1em;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1em;
  .steps {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: 738px) {
    width: 100%;
    height: 30%;
    margin: 0;
    border-radius: 0;
    background-image: url(${mobileSidebar});
    .steps {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
