import React from "react";
import styled from "styled-components";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import Button from "./Button";
import { useState, useEffect } from "react";
const Plan = ({ setShowSection, setPayPlan, payPlan, plan, setPlan }) => {
  const [planChecked, setPlanChecked] = useState(true);
  const changePlan = () => {
    setPlanChecked(!planChecked);
    setPayPlan(planChecked ? "yearly" : "monthly");
  };
  useEffect(() => {
    // set the plan to latest plan
    setPlanChecked(payPlan === "yearly" ? false : true);
  }, []);

  return (
    <Wrapper>
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>
      <div className="options">
        <div
          className={plan === "arcade" ? "option active" : "option"}
          onClick={(e) => setPlan("arcade")}
        >
          <img src={arcade} alt="arcade" />
          <div className="info">
            <h3>Arcade</h3>
            <p className="price">
              {payPlan === "monthly" ? "$9/mo" : "$90/yr"}
            </p>
            {payPlan === "yearly" && <p>2 months free</p>}
          </div>
        </div>
        <div
          className={plan === "advanced" ? "option active" : "option"}
          onClick={() => setPlan("advanced")}
        >
          <img src={advanced} alt="advanced" />
          <div className="info">
            <h3>Advanced</h3>
            <p className="price">
              {payPlan === "monthly" ? "$12/mo" : "$120/yr"}
            </p>
            {payPlan === "yearly" && <p>2 months free</p>}
          </div>
        </div>
        <div
          className={plan === "pro" ? "option active" : "option"}
          onClick={(e) => setPlan("pro")}
        >
          <img src={pro} alt="pr" />
          <div className="info">
            <h3>Pro</h3>
            <p className="price">
              {payPlan === "monthly" ? "$15/mo" : "$150/yr"}
            </p>
            {payPlan === "yearly" && <p>2 months free</p>}
          </div>
        </div>
      </div>
      <div className="duration">
        <div className="month">Monthly</div>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => changePlan()}
            checked={!planChecked}
          />
          <span className="slider round"></span>
        </label>
        <div className="year">Yearly</div>
      </div>
      <div className="buttons">
        <div onClick={() => setShowSection("yourinfo")}>
          <Button title="Go Back" type="back" />
        </div>
        <div onClick={() => setShowSection("add-ons")}>
          <Button title="Next Step" type="next" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Plan;
const Wrapper = styled.div`
  margin: 1em auto;
  max-width: 500px;
  position: relative;

  .options {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .option {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 150px;
    padding: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    border: 1px solid var(--secondary-light-gray);
    border-radius: 0.5em;
    cursor: pointer;
    img {
      margin-bottom: 3em;
    }
  }
  .option:hover {
    border: 2px solid var(--primary-pastel-blue);
  }
  .info h3 {
    margin-bottom: 0.2em;
    color: var(--primary-marine-blue);
  }
  .price {
    font-size: 0.9rem !important;
    color: var(--secondary-cool-gray) !important;
    padding-bottom: 0.2em;
  }
  .info p {
    font-size: 0.8rem;
    color: var(--primary-marine-blue);
  }
  .active {
    border: 2px solid var(--primary-pastel-blue);
  }
  .duration {
    margin: 2em 0;
    width: 100%;
    border-radius: 1em;
    max-width: 750px;
    background-color: var(--secondary-magnolia);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .switch {
    margin: 1em 2em;
  }
  @media (max-width: 900px) {
    .options {
      flex-direction: column;
    }
    .option {
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      justify-content: flex-start;
      img {
        margin-bottom: 0;
        margin-right: 1em;
      }
    }
    .buttons {
      position: relative;
    }
  }
  @media (max-width: 738px) {
    margin-top: -7em;
    z-index: 999;
    background-color: var(--secondary-white);
    padding: 1em 1.5em;
    width: 90%;
    height: 100%;
    border-radius: 2em;
    .buttons {
      position: absolute;
    }
  }
`;
