import * as Yup from "yup";
import { onlyTextRegExp, loginRegExp, passRegExp } from "../constants/regExps";

const registrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address"),
  firstName: Yup.string()
    .matches(onlyTextRegExp, "Only for text")
    .min(2, "Must be longer than 2 characters")
    .max(16, "Nice try, nobody has a first name that long")
    .required("Enter first name"),
  lastName: Yup.string()
    .required("Enter last name")
    .matches(onlyTextRegExp, "Only for text"),
  login: Yup.string()
    .matches(loginRegExp, "Only text, numbers, and - _ symbols")
    .required("Enter login")
    .min(3, "Must be longer than 2 characters")
    .max(16, "Nice try, nobody has a login that long"),
  password: Yup.string()
    .required("Enter password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(passRegExp, "Only a-z A-Z 0-9"),
});
export default registrationSchema;
