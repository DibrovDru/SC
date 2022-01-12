import React from 'react';
import { Formik, Form, Field } from 'formik';

const NewFolder = ({addItem}) => (
  <div>
    <Formik
      initialValues={{ name: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        addItem(Date.now(), values.name);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" className="new_name_form"/>
          <button type="submit" disabled={isSubmitting} className="ok_fold">OK</button>
        </Form>
      )}
    </Formik>
    <button className="fn_cancel_fold" id="cancel_button">Cancel</button>
  </div>
);

export default NewFolder;