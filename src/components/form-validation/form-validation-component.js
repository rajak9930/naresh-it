import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

function FormValidationComponent() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
      age: 0,
      city: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: yup.object({
      userName: yup
        .string()
        .required("Name is required")
        .min(4, "Name to short  min 4 char")
        .max(10, "Name to long max 10 char"),
      age: yup.number().required("Age is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: yup
        .string()
        .required("Phone is required")
        .matches(/^[0-9]+$/, "Phone number required"),
      city: yup.string().required(" City is required"),
    }),
  });
  return (
    <div className="container-fluid">
      <h2>Login Form</h2>
      <form action="" onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Username:</dt>
          <dd>
            <input type="text" name="userName" {...formik.getFieldProps("userName")} />
          </dd>
          <dd className="text-danger">{formik.errors.userName}</dd>
          <dt>Email:</dt>
          <dd>
            <input type="text" name="email" {...formik.getFieldProps("email")} />
          </dd>
          <dd className="text-danger">{formik.errors.email}</dd>
          <dt>Phone:</dt>
          <dd>
            <input type="text" name="phone" {...formik.getFieldProps("phone")} />
          </dd>
          <dd className="text-danger">{formik.errors.phone}</dd>
          <dt>Age:</dt>
          <dd>
            <input type="text" name="age" {...formik.getFieldProps("age")} />
          </dd>
          <dd className="text-danger">{formik.errors.age}</dd>
          <dt>Select City</dt>
          <select name=""city id="" {...formik.getFieldProps("city")}>
            <option value="-1">Select Your City</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
          </select>
        </dl>
        <dd className=""></dd>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormValidationComponent;
