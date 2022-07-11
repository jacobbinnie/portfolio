import React from "react";
import "./Skills.css";
import allSkills from "../skills.json";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillList">
        <h6 className="type">Proficient</h6>
        <div className="skillContainer">
          {allSkills.proficient.map((item) => (
            <h6>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Understanding</h6>
        <div className="skillContainer">
          {allSkills.understanding.map((item) => (
            <h6>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Management</h6>
        <div className="skillContainer">
          {allSkills.management.map((item) => (
            <h6>{item}</h6>
          ))}
        </div>
      </div>
      <div className="skillList">
        <h6 className="type">Bonus</h6>
        <div className="skillContainer">
          {allSkills.bonus.map((item) => (
            <h6>{item}</h6>
          ))}
        </div>
      </div>
    </div>
  );
}
