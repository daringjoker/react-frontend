import React from "react";
import { useFormik } from "formik";

//demo of a functional component
const PostComposer = (props) => {
  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      props.action(values);
      //do something to submit here
      composer.current.classList.remove("onfocus");
      formik.resetForm();
    },
  });
  let composer = React.createRef();
  let handleFocus = (e) => {
    composer.current.classList.add("onfocus");
  };
  let handleBlur = (e) => {
    formik.resetForm();
    composer.current.classList.remove("onfocus");
  };
  return (
    <div ref={composer} className="composer-wrapper">
      <div className="composer-title">{props.title}</div>
      <button className="collapse" onClick={handleBlur}>
        X
      </button>
      <form className="post-form" autoComplete="off" onSubmit={formik.handleSubmit}>
        <textarea
          maxLength="1000"
          id="content"
          name="content"
          type="text"
          onChange={formik.handleChange}
          onFocus={handleFocus}
          value={formik.values.content}
          placeholder={props.placeholder}
        />
        <button className="compose-btn" type="submit">
          Post it
        </button>
      </form>
    </div>
  );
};
export default PostComposer;
