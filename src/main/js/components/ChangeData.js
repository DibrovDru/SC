import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ChangeData = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" className="email_form" placeholder="Change email"/>
          <ErrorMessage name="email" component="div" className="error_email"/>
          <Field type="password" name="password" className="password_form" placeholder="Change password"/>
          <ErrorMessage name="password" component="div" />

          <button type="submit" disabled={isSubmitting} className="log_in_button">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ChangeData;