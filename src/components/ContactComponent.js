import React, { Component } from "react";
import { Form, Button, Row, Col, Input } from "reactstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { Spring } from "react-spring/renderprops";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .label("Name")
    .min(3, "Name length should be between 3 and 30 characters")
    .max(30, "Name length should be between 3 and 30 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required()
    .label("Email"),
  phone: yup
    .string()
    .required()
    .label("Phone number")
    .min(10, "Invalid phone number")
    .max(15, "Invalid phone number"),
  message: yup.string().required("Please fill out this field!")
});

class Contact extends Component {
  render() {
    const errStyle = { fontSize: "80%", color: "#dc3545" };
    return (
      <Spring from={{ marginTop: -500 }} to={{ marginTop: 0 }}>
        {props => (
          <div style={props}>
            <h2 className="display-4">Contact</h2>
            <Formik
              initialValues={{ name: "", email: "", phone: "", message: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert(
                    `Thank you for your feedback! \n ${JSON.stringify(
                      values,
                      null,
                      2
                    )}`
                  );
                  setSubmitting(false);
                  resetForm();
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Row className="form-group">
                    <Col>
                      <Col xs={12}>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          invalid={errors.name && touched.name}
                        />
                      </Col>
                      <Col xs={12}>
                        {errors.name && touched.name ? (
                          <div style={errStyle}>{errors.name}</div>
                        ) : null}
                      </Col>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col xs={12} md={6}>
                      <Col xs={12}>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          invalid={errors.email && touched.email}
                        />
                      </Col>
                      <Col xs={12}>
                        {errors.email && touched.email ? (
                          <div style={errStyle}>{errors.email}</div>
                        ) : null}
                      </Col>
                    </Col>

                    <Col xs={12} md={6}>
                      <Col xs={12}>
                        <Input
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.phone}
                          invalid={errors.phone && touched.phone}
                        />
                      </Col>
                      <Col xs={12}>
                        {errors.phone && touched.phone ? (
                          <div style={errStyle}>{errors.phone}</div>
                        ) : null}
                      </Col>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col>
                      <Col>
                        <Input
                          type="textarea"
                          id="message"
                          name="message"
                          rows="10"
                          onChange={handleChange}
                          value={values.message}
                          placeholder="Describe your project"
                          invalid={errors.message && touched.message}
                        />
                      </Col>
                      <Col xs={12}>
                        {errors.message && touched.message ? (
                          <div style={errStyle}>{errors.message}</div>
                        ) : null}
                      </Col>
                    </Col>
                  </Row>
                  <Row className="form-group" className="mx-auto">
                    <Col xs={12} className="text-center">
                      <Button
                        type="submit"
                        color="primary"
                        disabled={isSubmitting}
                        style={{
                          borderRadius: "35px",
                          paddingLeft: "5%",
                          paddingRight: "5%"
                        }}
                        className="font-weight-bold"
                      >
                        Send request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Spring>
    );
  }
}

export default Contact;
