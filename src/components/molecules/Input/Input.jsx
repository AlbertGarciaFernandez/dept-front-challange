import React from "react";

//styles
import "./Input.scss";

//formik
import { Field } from "formik";

function Input({
  label = "field-1",
  name = "field-1",
  error,
  touched,
  placeholder = "",
}) {
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        <label htmlFor={`${name}Input`}>
          {label}
          <Field
            name={name}
            id={`${name}Input`}
            placeholder={placeholder}
            className={error && touched ? "inputError" : ""}
          />
        </label>
      </div>
      <InputError error={error} touched={touched} />
    </div>
  );
}

export function InputError({ error, touched, size = "1em" }) {
  const styles = {
    fontSize: size,
  };
  return (
    <div style={styles} className="errorText">
      {error && touched ? `${error}` : ""}
    </div>
  );
}

export default Input;
