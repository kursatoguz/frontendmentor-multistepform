import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
const Personal = ({ personal, setPersonal, setShowSection }) => {
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal({ ...personal, [name]: value });

    if (value !== "") {
      setError((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };
  const checkErrors = () => {
    const { name, email, phone } = personal;

    if (name === "") {
      setError((prevErrors) => ({ ...prevErrors, name: true }));
    }
    if (email === "") {
      setError((prevErrors) => ({ ...prevErrors, email: true }));
    }
    if (phone === "") {
      setError((prevErrors) => ({ ...prevErrors, phone: true }));
    }
    if (name !== "" && email !== "" && phone !== "") {
      setShowSection("selectplan");
    }
  };
  return (
    <Wrapper>
      <header>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>
      <form>
        <div className="form-control">
          <div className="labels">
            <label htmlFor="name">Name</label>
            {error.name && <span>This field is required</span>}
          </div>
          <input
            className={error.name ? "warning" : ""}
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={personal.name}
            placeholder="e.g Stephen King"
          />
        </div>
        <div className="form-control">
          <div className="labels">
            <label htmlFor="email">Email Adress</label>
            {error.email && <span>This field is required</span>}
          </div>
          <input
            className={error.email ? "warning" : ""}
            value={personal.email}
            name="email"
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="e.g stephenking@lorem.com"
          />
        </div>
        <div className="form-control">
          <div className="labels">
            <label htmlFor="phone">Phone Number</label>
            {error.phone && <span>This field is required</span>}
          </div>
          <input
            className={error.phone ? "warning" : ""}
            value={personal.phone}
            name="phone"
            onChange={handleChange}
            type="text"
            id="phone"
            placeholder="e.g +1 234 567 890"
          />
        </div>
      </form>
      <div className="btn" onClick={() => checkErrors()}>
        <Button title="Next Step" type="next" />
      </div>
    </Wrapper>
  );
};

export default Personal;
const Wrapper = styled.div`
  margin: 1em auto;
  position: relative;
  max-width: 500px;
  .form-control {
    margin-bottom: 1em;
  }
  .form-control label {
    display: block;
    margin-bottom: 0.5em;
    font-size: 0.9rem;
    color: var(--primary-marine-blue);
    font-weight: 500;
  }
  .form-control input {
    width: 100%;
    padding: 0.6em;
    border: 1px solid var(--secondary-light-gray);
    border-radius: 0.5em;
    outline: none;
    font-size: 1rem;
    color: var(--primary-marine-blue);
  }
  input:focus {
    outline: 1px solid var(--primary-purplish-blue);
  }
  .btn {
    position: absolute;
    bottom: 1.5em;
    right: 0;
  }
  .labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .labels span {
    font-size: 0.8rem;
    color: red;
    font-weight: 500;
  }
  .warning {
    border: 1px solid red !important;
  }
  @media (max-width: 738px) {
    margin-top: -7em;
    background-color: var(--secondary-white);
    padding: 1em;
    border-radius: 2em;
    width: 90%;
    height: 100%;
  }
`;
