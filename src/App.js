import { useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import mail from "../src/mailicon.png";

function App() {
  return (
    <div className="App">
      <Container />
      <div className="email">
        <h6 className="builtby">say hello</h6>
        <a href="mailto:hello@jacobbinnie.com">
          <img className="icon" src={mail} alt="email"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
