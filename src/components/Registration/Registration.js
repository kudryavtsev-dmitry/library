import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { CustomField } from "../../constants/CustomField";
import "./Registration.css";
import { registration } from "../../redux/auth/actions";
import registrationSchema from "./yup";

const Registration = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        login: "",
        email: "",
        password: "",
      }}
      validationSchema={registrationSchema}
      onSubmit={(values) => dispatch(registration(values))}
    >
      {({ isSubmitting }) => (
        <Form className="registration-container">
          <h3>Регистрация</h3>
          <CustomField required name="firstName" label="Имя" type="text" />
          <CustomField required name="lastName" label="Фамилия" type="text" />
          <CustomField required name="login" label="Логин" type="text" />
          <CustomField required name="email" label="Email" type="email" />
          <CustomField
            required
            name="password"
            label="Пароль"
            type="password"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            color="primary"
            variant="contained"
          >
            Зарегистрироваться
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
