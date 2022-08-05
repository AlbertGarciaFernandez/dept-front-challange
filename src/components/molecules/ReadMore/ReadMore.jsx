import React from "react";

//styles
import "./ReadMore.scss";

//atoms
import Ellipse from "../../atoms/Ellipse/Ellipse";

function ReadMore() {
  return (
    <div className="readMoreLink">
      <span>
        <Ellipse />
      </span>
      <span className="readMoreText">
        <font>Read more</font>
      </span>
    </div>
  );
}

export default ReadMore;
