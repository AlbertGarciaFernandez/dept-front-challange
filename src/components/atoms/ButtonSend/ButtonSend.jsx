import React from "react";

//styles

import "./ButtonSend.scss";

function Button() {
  return (
    <div className="buttonWrapper" data-testid="buttonSubmit-1">
      <button type="submit" className="buttonSend">
        Send
      </button>
    </div>
  );
}

export default Button;
