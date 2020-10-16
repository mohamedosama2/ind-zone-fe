import React from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import Axios from "../axios";
import Input from './Input/Input'
import {updatedObject,checkValidity}from '../shared/shared'
const wow = new WOW();
wow.init();

class ChangeCode extends React.Component {
  state = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    err: null,
    controls: {
      confirmedPassword: {
        value: "",
        valid: false,
        validation: {
          required: true,
          minLength: 6,
        },
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "تأكيد رقم المرور  ",
          id: "confirmedPassword",
        },
        touched: false,
      },
      password: {
        value: "",
        valid: false,
        validation: {
          required: true,
          minLength: 6,
        },
        elementType: "input",
        elementConfig: {
          type: "Password",
          placeholder: "رقم المرور",
        },
        touched: false,
      },
    },
  };

  on(event, elementName) {
    const updated = updatedObject(this.state.controls, {
      [elementName]: updatedObject(this.state.controls[elementName], {
        valid: checkValidity(
          event.target.value,
          this.state.controls[elementName].validation
        ),
        value: event.target.value,
        touched: true,
      }),
    });
    this.setState({ controls: updated });
  }
  submit = async (event) => {
    try {
      event.preventDefault();
      let error;
      const str = "";
      const s = str.concat(
        this.state.e,
        this.state.d,
        this.state.c,
        this.state.b,
        this.state.a
      );
      if (
        !(
          this.state.e &&
          this.state.d &&
          this.state.c &&
          this.state.b &&
          this.state.a &&
          this.state.controls.password.valid &&
          this.state.controls.confirmedPassword.valid
        )
      ) {
        error = (
          <div className="alert alert-danger m-auto" role="alert">
            Fill the fields
          </div>
        );
        return this.setState({ err: error });
      }
      if (this.state.controls.password.value !== this.state.controls.confirmedPassword.value) {
        error = (
          <div className="alert alert-danger m-auto" role="alert">
            Not Match
          </div>
        );
        this.setState({ err: error });
      } else {
        this.setState({ err: null });
        /* console.log(props.match.params.email,s,password) */
        await Axios.post("/reset-password", {
          email: this.props.match.params.email,
          code: s,
          password: this.state.controls.password.value,
        });
        this.props.history.push("/"); //////////////////////////////////////////////////////////////////////////////////lsaaaaaaa
      }
    } catch (er) {
      let error = (
        <div className="alert alert-danger m-auto" role="alert">
          {er.response ? er.response.data.message : "internal server error"}
        </div>
      );
      this.setState({ err: error });
    }
  };

  render() {
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-5 wow fadeInRight order-lg-1 order-md-2 " data-wow-delay="1s">
              <img
                src={loginimg}
                alt="loginimg"
                title="loginimg"
                className="img-fluid"
              />
              <div className="d-flex justify-content-center">
                <a href="/signup" className="linkStyle"></a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-5 mt-5 order-lg-2 order-md-1 wow fadeInLeft pt-5 " data-wow-delay="1s">
              <p className="colortext d-flex justify-content-start">
                تم ارسال رمز التحقيق على الايميل الخاص بك
              </p>
              {this.state.err}
              <form className="  mt-5  ">
                <div className="text d-flex justify-content-start ">
                  <p>ادخل رمز التحقيق </p>
                </div>

                <div className="form-group   mb-4  ">
                  <div className="d-flex ">
                    <input
                      type="number"
                      className=" size ml-2"
                      onChange={(e) => this.setState({ a: e.target.value })}
                    />
                    <input
                      type="number"
                      className=" size ml-2"
                      onChange={(e) => this.setState({ b: e.target.value })}
                    />
                    <input
                      type="number"
                      className=" size ml-2"
                      onChange={(e) => this.setState({ c: e.target.value })}
                    />
                    <input
                      type="number"
                      className=" size ml-2"
                      onChange={(e) => this.setState({ d: e.target.value })}
                    />
                    <input
                      type="number"
                      className=" size ml-2"
                      onChange={(event) =>
                        this.setState({ e: event.target.value })
                      }
                    />
                  </div>

                  <div className="form-group  mb-4 mt-3 ">
                    <div className="d-flex">
                      <span className="icon">
                        <i className="fas fa-lock"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.password.valid}
                        changed={(e) => this.on(e, "password")}
                        value={this.state.controls.password.value}
                        elementType={this.state.controls.password.elementType}
                        hasValidity
                        touched={this.state.controls.password.touched}
                        elementConfig={
                          this.state.controls.password.elementConfig
                        }
                      />
                    
                      <span className="eyeicon">
                        <i className="fas fa-eye-slash"></i>
                      </span>
                    </div>
                  </div>

                  <div className="form-group  mb-4 mt-3 ">
                    <div className="d-flex">
                      <span className="icon">
                        <i className="fas fa-lock"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.confirmedPassword.valid}
                        changed={(e) => this.on(e, "confirmedPassword")}
                        value={this.state.controls.confirmedPassword.value}
                        elementType={
                          this.state.controls.confirmedPassword.elementType
                        }
                        hasValidity
                        touched={this.state.controls.confirmedPassword.touched}
                        elementConfig={
                          this.state.controls.confirmedPassword.elementConfig
                        }
                      />

                      <span className="eyeicon">
                        <i className="fas fa-eye-slash"></i>
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="colortext d-flex justify-content-start mt-1"
                    onClick={async () => {
                      await Axios.post("/resend", {
                        email: this.props.match.params.email,
                      });
                    }}
                  >
                    ارسال مره اخرى ؟
                  </a>
                </div>

                <div className="d-flex justify-content-center mt-3  ml-5">
                  <button
                    href="/changepass"
                    className="btn btn-color px-4 "
                    onClick={this.submit}
                  >
                    تحقق{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChangeCode;
