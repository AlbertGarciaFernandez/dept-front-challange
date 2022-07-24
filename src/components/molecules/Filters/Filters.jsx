import React from "react";
import "./Filters.scss";

function Filters() {
  return (
    <div className="filterSection">
      <div>
        <p>
          Show me
          <b>
            <u>all work</u>
          </b>
        </p>
      </div>
      <div>
        <p>
          in
          <b>
            <u>all industries</u>
          </b>
        </p>
      </div>
    </div>
  );
}

export default Filters;
