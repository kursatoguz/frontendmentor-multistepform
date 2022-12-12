import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useState, useEffect } from "react";
const Addons = ({ setShowSection, payPlan, addons, setAddons }) => {
  // add selected class to selected feature
  const handleSelect = (e) => {
    const feature = e.target.parentElement.parentElement;
    if (feature.classList.contains("selected")) {
      feature.classList.remove("selected");
      setAddons(
        addons.map((addon) => {
          if (addon.id === feature.id) {
            return { ...addon, selected: false };
          }
          return addon;
        })
      );
    } else {
      feature.classList.add("selected");
      setAddons(
        addons.map((addon) => {
          if (addon.id === feature.id) {
            return { ...addon, selected: true };
          }
          return addon;
        })
      );
    }
  };

  useEffect(() => {
    // add selected class to selected feature and input checked
    addons.forEach((addon) => {
      if (addon.selected) {
        document.getElementById(addon.id).classList.add("selected");
        document.getElementById(addon.id).firstChild.firstChild.checked = true;
      }
    });
  }, []);

  return (
    <Wrapper>
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming exprience.</p>
      </header>
      <div className="features">
        <div className="feature" id="online">
          <div className="info">
            <input type="checkbox" onChange={(e) => handleSelect(e)} />
            <div className="text">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="price">
            {payPlan === "yearly" ? "+$10/yr" : "+$1/mo"}
          </div>
        </div>
        <div className="feature" id="storage">
          <div className="info">
            <input type="checkbox" onChange={(e) => handleSelect(e)} />
            <div className="text">
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="price">
            {payPlan === "yearly" ? "+$20/yr" : "+$2/mo"}
          </div>
        </div>
        <div className="feature" id="profile">
          <div className="info">
            <input type="checkbox" onChange={(e) => handleSelect(e)} />
            <div className="text">
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="price">
            {payPlan === "yearly" ? "+$20/yr" : "+$2/mo"}
          </div>
        </div>
      </div>
      <div className="buttons">
        <div onClick={() => setShowSection("selectplan")}>
          <Button title="Go Back" type="back" />
        </div>
        <div onClick={() => setShowSection("summary")}>
          <Button title="Next Step" type="next" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Addons;
const Wrapper = styled.div`
  margin: 1em auto;
  position: relative;
  max-width: 500px;
  width: 100%;
  .features {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .feature {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1em;
    margin: 0.5em 0;
    border: 1px solid var(--secondary-light-gray);
    border-radius: 0.5em;
    :hover {
      cursor: pointer;
      border: 2px solid var(--primary-pastel-blue);
    }
    .info {
      display: flex;
      align-items: center;
      input {
        height: 1.2rem;
        width: 1.2rem;
        background-color: var(--primary-purplish-blue);
        cursor: pointer;
      }

      .text {
        margin-left: 1em;
        h3 {
          color: var(--primary-marine-blue);
        }
        p {
          font-size: 0.9rem;
          color: var(--secondary-cool-gray);
        }
      }
    }
  }
  .price {
    color: var(--primary-purplish-blue);
  }

  .selected {
    border: 2px solid var(--primary-pastel-blue);
  }
  @media (max-width: 738px) {
    margin-top: -7em;
    z-index: 999;
    background-color: var(--secondary-white);
    padding: 1em 1.5em;
    width: 90%;
    height: 100%;
    border-radius: 2em;
  } ;
`;
