import React from "react";
import { useFormik } from "formik";
import withAuthPrivilege from "../../HOC/auth";

//demo of a functional component
const RegisterForm = (props) => {
  let { register } = props;
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "male",
    },
    onSubmit: (values) => {
      register(values);
    },
  });

  return (
    <form className="Register-form form" autoComplete="off" onSubmit={formik.handleSubmit}>
      <input
        id="first-name"
        name="first_name"
        type="text"
        placeholder="First Name"
        onChange={formik.handleChange}
        value={formik.values.first_name}
      />
      <input
        id="last-name"
        name="last_name"
        type="text"
        placeholder="Last Name"
        onChange={formik.handleChange}
        value={formik.values.last_name}
      />
      <input
        id="email"
        name="email"
        type="Email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="username"
        name="username"
        type="text"
        placeholder="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <input
        id="password"
        name="password"
        type="password"
        placeholder="8-20 letter Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label className="inline-label" htmlFor="birth_date">
        DOB
        <input
          id="birth_date"
          name="birth_date"
          type="date"
          placeholder="8-20 letter birth_date"
          onChange={formik.handleChange}
          value={formik.values.birth_date}
        />
      </label>
      <div className="gender-input">
        <label className="main-label" htmlFor="gender">
          Gender
        </label>
        <label className="inline-label" for="male">
          <input
            className="inline-label"
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={formik.handleChange}
          />
          Male
        </label>
        <label className="inline-label" for="female">
          <input type="radio" id="female" name="gender" value="female" onChange={formik.handleChange} />
          Female
        </label>
        <label className="inline-label" for="other">
          <input type="radio" id="other" name="gender" value="other" onChange={formik.handleChange} />
          Other
        </label>
      </div>
      <button class="btn btn-pri" type="submit">
        Register
      </button>
    </form>
  );
};
export default withAuthPrivilege(RegisterForm);
