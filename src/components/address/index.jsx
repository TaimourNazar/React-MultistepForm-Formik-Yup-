import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Address = ({submit,setFormValues,prevValues}) => {

  return (
    <Formik
      initialValues={prevValues}
      validationSchema={Yup.object({
        area: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .min(5, 'Must be 5 characters or more')
          .required('Required Necessary'),
        city: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}

      onSubmit={(values) => {
        submit(1)
        setFormValues({...values})
      }}>

      <Form>
        <label htmlFor="area">Area</label>
        <Field name="area" type="text" />
        <ErrorMessage name="area" />
        <br/>
        <label htmlFor="city">City</label>
        <Field name="city" type="text" />
        <ErrorMessage name="city" />
        <br/>
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>

  );

};