import React from "react";
import styled from "styled-components";
import Button from "./Button";
const Summary = ({ plan, payPlan, addons, setShowSection }) => {
  const arcadePrice = payPlan === "monthly" ? 9 : 90;
  const advancedPrice = payPlan === "monthly" ? 12 : 120;
  const proPrice = payPlan === "monthly" ? 15 : 150;
  const currentPlan = payPlan === "monthly" ? "mo" : "yr";
  const currentPrice =
    plan === "arcade"
      ? arcadePrice
      : plan === "advanced"
      ? advancedPrice
      : proPrice;

  const addonPrice = addons.reduce((total, addon) => {
    if (addon.selected) {
      total += payPlan === "monthly" ? addon.monthlyPrice : addon.yearlyPrice;
    }
    return total;
  }, 0);
  const totalPrice = currentPrice + addonPrice;

  return (
    <Wrapper>
      <header>
        <h1>Finishing up</h1>
        <p>Double-check everythink looks OK before confirming.</p>
      </header>
      <div className="summary">
        <div className="plan">
          <div className="plan-info">
            <h3>
              {plan}({payPlan})
            </h3>
            <p onClick={() => setShowSection("selectplan")}>Change</p>
          </div>
          <h3 className="price">
            ${currentPrice}/{currentPlan}
          </h3>
        </div>
        <div className="addons">
          {addons.map((addon) => {
            if (addon.selected) {
              return (
                <div className="addon">
                  <p>{addon.title}</p>
                  <p className="addon-price">
                    +$
                    {payPlan === "monthly"
                      ? addon.monthlyPrice
                      : addon.yearlyPrice}
                    /{currentPlan}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="total">
        <p>Total ({payPlan === "monthly" ? "per month" : "per year"})</p>
        <p className="total-price">
          ${totalPrice}/{currentPlan}
        </p>
      </div>
      <div className="buttons">
        <div onClick={() => setShowSection("add-ons")}>
          <Button title="Go Back" type="back" />
        </div>
        <div onClick={() => setShowSection("finishing")}>
          <Button title="Confirm" type="confirm" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Summary;
const Wrapper = styled.div`
  margin: 1em auto;
  position: relative;
  max-width: 500px;
  width: 100%;
  .summary {
    background-color: var(--secondary-magnolia);
    padding: 1em;
    border-radius: 0.5em;
  }
  .plan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--secondary-light-gray);
    padding: 1em 0;
    .plan-info {
      margin-right: 2em;
      h3 {
        padding-bottom: 0.2em;
      }
    }
    h3 {
      color: var(--primary-marine-blue);
      text-transform: capitalize;
    }
    p {
      color: var(--secondary-cool-gray);
      text-decoration: underline;
      :hover {
        cursor: pointer;
        color: var(--primary-purplish-blue);
      }
    }
    .price {
      color: var(--primary-marine-blue);
      text-transform: lowercase;
    }
  }
  .addon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
    p {
      color: var(--secondary-cool-gray);
    }
  }
  .addon-price {
    color: var(--primary-marine-blue) !important;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 1em;
    p {
      color: var(--secondary-cool-gray);
    }
    .total-price {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary-purplish-blue);
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
  }
`;
