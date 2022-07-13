import { useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import mail from "../src/mailicon.png";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <div className="App">
      <Container />
      <ProjectContainer />
    </div>
  );
}

export default App;
