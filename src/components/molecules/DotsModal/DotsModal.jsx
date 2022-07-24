import React from "react";

import "./DotsModal.scss";

function DotsModal() {
  return (
    <div>
      <input type="checkbox" id="navi-toggle" class="checkbox" />
      <label for="navi-toggle" class="button">
        <span class="icon">&nbsp;</span>
      </label>
      <div class="background">&nbsp;</div>
      <nav class="nav">
        <ul class="list">
          <li class="item">Home</li>
          <li class="item">Work</li>
          <li class="item">Culture</li>
          <li class="item">Servicies</li>
          <li class="item">Partners</li>
          <li class="item">Stories</li>
          <li class="item">Careers</li>
          <li class="item">Events</li>
          <li class="item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default DotsModal;
