import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Personal from "./components/Personal";
import Plan from "./components/Plan";
import Addons from "./components/Addons";
import Summary from "./components/Summary";
import Message from "./components/Message";
import data from "./addonsData";
import { useState } from "react";
function App() {
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [plan, setPlan] = useState("arcade");
  const [payPlan, setPayPlan] = useState("monthly");
  const [showSection, setShowSection] = useState("yourinfo");
  const [addons, setAddons] = useState(data);
  return (
    <Wrapper>
      <div className="container">
        <Sidebar section={showSection} />
        {showSection === "yourinfo" && (
          <Personal
            personal={personal}
            setPersonal={setPersonal}
            setShowSection={setShowSection}
          />
        )}
        {showSection === "selectplan" && (
          <Plan
            setShowSection={setShowSection}
            payPlan={payPlan}
            setPayPlan={setPayPlan}
            plan={plan}
            setPlan={setPlan}
          />
        )}
        {showSection === "add-ons" && (
          <Addons
            setShowSection={setShowSection}
            payPlan={payPlan}
            addons={addons}
            setAddons={setAddons}
          />
        )}
        {showSection === "summary" && (
          <Summary
            setShowSection={setShowSection}
            payPlan={payPlan}
            plan={plan}
            addons={addons}
          />
        )}
        {showSection === "finishing" && <Message />}
      </div>
    </Wrapper>
  );
}
export default App;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .container {
    display: flex;
    margin: 2rem auto;
    width: 60%;
    max-width: 1200px;
    height: 80%;
    background-color: var(--secondary-white);
    border-radius: 1em;
  }
  @media (max-width: 738px) {
    .container {
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
  }
`;
