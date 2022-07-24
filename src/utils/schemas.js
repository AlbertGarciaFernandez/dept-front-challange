import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  firstName: Yup.string()
    .min("2", "First name too short")
    .max("20", "First name too long")
    .required("First name is required"),

  email: Yup.string()
    .email("This must be a valid email address")
    .matches(
      /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
      "Please fill a valid email address"
    )
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default formSchema;
