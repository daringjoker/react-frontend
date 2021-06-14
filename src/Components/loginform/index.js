import React from "react";
import "./loginform.css";
import { useFormik } from "formik";
import { login } from "../../Services/auth";
//demo of a functional component
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <form
      className="login-form form"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="username">Username/Email</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <input
        id="remember"
        name="remember"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.remember}
      />
      <label id="remember-label" htmlFor="remember">
        Remember me
      </label>
      <button className="btn btn-pri" type="submit">
        Sign In
      </button>
    </form>
  );
};
export default LoginForm;
