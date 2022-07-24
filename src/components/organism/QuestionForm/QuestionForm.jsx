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
        <h1 className="formHeader">QUESTION? WE ARE HERE TO HELP!</h1>
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
              <div className="nameEmailWrapper">
                <Input
                  error={errors.firstName}
                  touched={touched.firstName}
                  icon="user"
                  name="Name"
                  label="Name"
                  placeholder="Name"
                />

                <Input
                  error={errors.email}
                  touched={touched.email}
                  label="Email"
                  name="Email"
                  placeholder="Email"
                />
              </div>
              <div className="messageWrapper">
                <Input
                  error={errors.message}
                  touched={touched.message}
                  label="Message"
                  name="Message"
                  placeholder="Message"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Button type="submit">Send</Button>
    </section>
  );
}

export default questionForm;
