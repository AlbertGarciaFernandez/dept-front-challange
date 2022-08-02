import React from "react";
import { Form, Formik } from "formik";
import "./QuestionForm.scss";

import Button from "../../atoms/ButtonSend/ButtonSend";
import Input from "../../molecules/Input/Input";

import { formSchema } from "../../../utils/schemas";

function questionForm() {
  return (
    <section className="formSection">
      <div className="formHeaderWrapper">
        <p className="formHeader">QUESTION? WE ARE HERE TO HELP!</p>
      </div>
      <div className="formFormikWrapper">
        <Formik
          initialValues={{
            email: "",
            firstName: "",
          }}
          validationSchema={formSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="formFormWrapper">
                <div
                  className="name
                messageWrapper"
                >
                  <Input
                    error={errors.firstName}
                    touched={touched.firstName}
                    icon="user"
                    name="Name"
                    label="Name"
                  />
                  <Input
                    error={errors.message}
                    touched={touched.message}
                    label="Message"
                    name="Message"
                  />
                  <div className="buttonSendWrapper">
                    <Button type="submit">Send</Button>
                  </div>
                </div>
                <div className="emailWrapper">
                  <Input
                    error={errors.email}
                    touched={touched.email}
                    label="Email"
                    name="Email"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default questionForm;
