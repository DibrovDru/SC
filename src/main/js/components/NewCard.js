import React from 'react';
import { Formik, Form, Field } from 'formik';

const NewCard = ({addItem}) => (
  <div>
    <Formik
      initialValues={{ name: '', description: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);

        addItem(Date.now(), values.name, values.description, false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <section className="name_title">New card</section>
            <Field type="name" name="name" as={InputComponent} className="new_name_card" placeholder="Enter name"/>
            <Field type="description" name="description" as={InputComponent} className="description_title" placeholder="Enter description"/>
            <button type="submit" disabled={isSubmitting} className="ok">OK</button>
        </Form>
      )}
    </Formik>
    <button className="fn_cancel" id="cancel_button">Cancel</button>
  </div>
);

const InputComponent = (props) => (
    <textarea type="text" {...props} />
  );

export default NewCard;