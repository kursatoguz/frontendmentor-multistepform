import React from "react";
import styled from "styled-components";

const Stepnames = ({ stepName, index, section }) => {
  const name = stepName.replace(/\s/g, "").toLowerCase();
  section = section === "finishing" ? "summary" : section;
  // if window size less than 738px remove the step-info div
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 738) {
      const stepInfo = document.querySelectorAll(".step-info");
      stepInfo.forEach((info) => {
        info.style.display = "none";
      });
    } else {
      const stepInfo = document.querySelectorAll(".step-info");
      stepInfo.forEach((info) => {
        info.style.display = "block";
      });
    }
  });

  return (
    <Wrapper>
      <div className="form-steps">
        <div className={section === name ? "stepNumber active" : "stepNumber"}>
          {index + 1}
        </div>
        <div className="step-info">
          <div className="step">STEP {index + 1}</div>
          <div className="stepName">{stepName.toUpperCase()}</div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Stepnames;
const Wrapper = styled.div`
  .form-steps {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1.5em;
  }
  .stepNumber {
    border: 1px solid var(--secondary-alabaster);
    border-radius: 50%;
    margin-right: 1em;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--secondary-alabaster);
  }
  .step-info {
    margin-left: 1em;
  }
  .step {
    font-size: 0.8rem;
    color: var(--secondary-light-gray);
    margin-bottom: 0.2em;
  }
  .stepName {
    color: var(--secondary-white);
    font-weight: 500;
  }
  .active {
    background-color: var(--primary-light-blue);
    color: var(--primary-marine-blue);
  }
`;
