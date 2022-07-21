import React from "react";
import "./PrimaryNavigation.scss";

function PrimaryNavigation() {
  return (
    <nav className="navWrapper">
      <ul className="navList">
        <li>Work</li>
        <li>Culture</li>
        <li>Services</li>
        <li>Insights</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
