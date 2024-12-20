import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";
const FormikValidation = () => {
  function cityChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Formik Validation</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: "",
        }}
        validationSchema={yup.object({
          name: yup.string().required("Name is required"),
          email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
          age: yup.number().required("Age is required"),
        })}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {(props) => (
          <Form className={!props.isValid? 'bg-danger':'bg-success'}>
            <dl>
              <dt>Name</dt>
              <dd>
                <Field name="name" type="text" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="name" />
              </dd>
              <dt>Email</dt>
              <dd>
                <Field name="email" type="text" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="email" />
              </dd>
              <dt>Age</dt>
              <dd>
                <Field name="age" type="text" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="age" />
              </dd>
              <dt>City</dt>
              <dd>
                <Field name="city" as="select" onChange={cityChange}>
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bihar">Bihar</option>
                </Field>
              </dd>
            </dl>
            <button disabled={!props.isValid} className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikValidation;
