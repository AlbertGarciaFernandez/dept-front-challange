import React from "react";

//styles
import "./Filters.scss";

function Filters() {
  return (
    <div className="filterSection">
      <div className="showmeText">
        <p className="grayTextFilter">Show me</p>
        <p className="blackTextFilter">
          <u>all work</u>
        </p>
      </div>
      <div className="allindustriesText">
        <p className="grayTextFilter">in</p>
        <p className="blackTextFilter">
          <u>all industries</u>
        </p>
      </div>
    </div>
  );
}

export default Filters;
