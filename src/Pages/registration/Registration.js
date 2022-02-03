import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/login/logo.svg";
import register from "../../Assets/Images/login/register.png";
import { Form, Button } from "react-bootstrap";
import "./Registration.css";

const Registration = () => {
  return (
    <div>
      <div className="register">
        {/* // for Show image */}
        <div className="register__left">
          <div className="register__left--logo">
            <NavLink to="registration">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <div className="register__left--content">
            <h1>Manage the job more effectively with Minimal</h1>
            <div className="register__left--content__image">
              <img src={register} alt="login" />
            </div>
          </div>
        </div>
        {/* // for Show form */}
        <div className="register__right">
          <div className="register__right--right-link">
            <p>
              Don't Have An Account? <NavLink to="/"> Login Now </NavLink>{" "}
            </p>
          </div>

          <div className="register__right--content">
            <div className="register__right--content__form">
              <div className="register__right--content__form--content">
                <h2>Get started</h2>
                <p>Free forever.No credit card needed</p>
              </div>

              <div className="register__right--content__form--main-form">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="input"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>

                  <div className="form__button">
                    <Button variant="primary" type="submit">
                      <NavLink to="/">Register</NavLink>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
