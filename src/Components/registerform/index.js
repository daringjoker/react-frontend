import React from "react";
import { useFormik } from "formik";
//demo of a functional component
const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onChange: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="Register-form form"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="username">Username</label>
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
      <label htmlFor="conform">Confirm Password</label>
      <input
        id="conform"
        name="conform"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.conform}
      />
      <button class="btn btn-pri" type="submit">
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
