import React, { Component } from "react";
import { connect } from "react-redux";
import { WOW } from "wowjs";
import Input from "../components/Input/Input";
import "../fontawesome-free-5.9.0-web/css/all.css";
import { checkValidity, updatedObject } from "../shared/shared";
import * as actions from "../store/index";
import "../WOW-master/css/libs/animate.css";
import img from "./images/login.png";
import logo from "../2.png";
import Spiner from "./Spiner/Spiner";
import "./styles/authentication.css";
const wow = new WOW();
wow.init();

class Login extends Component {
  state = {
    controls: {
      email: {
        value: "",
        valid: false,
        validation: {
          required: true,
          isEmail: true,
        },
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "البريد الالكترونى",
          id: "Email",
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
  submit = (e) => {
    e.preventDefault();
    if (this.state.controls.email.valid && this.state.controls.password.valid) {
      this.props.signIn(
        this.state.controls.email.value,
        this.state.controls.password.value
      );
    }
  };

  render() {
    var a = document.querySelector(".spinner-wrapper");
    setTimeout(() => {
      a.style.display = "none";
    }, 100);

    let error = null;

    if (this.props.error) {
      error = (
        <div className="alert alert-danger m-auto text-center" role="alert">
          {this.props.error}
        </div>
      );
    }

    let form = null;
    form = (
      <form className=" mx-auto mt-5 ">
          <img src={logo} alt="logo" className="size d-flex justify-content-end mb-5"></img>
        <div className="text d-flex justify-content-start mt-5 mr-lg-5 mr-md-0">
          <p> تسجيل الدخول</p>
        </div>

        <div className="form-group  mr-lg-5 mr-md-0 mb-4 d-flex">
          <span className="icon">
            <i className="fas fa-envelope "></i>
          </span>
          <Input
            inValid={!this.state.controls.email.valid}
            changed={(e) => this.on(e, "email")}
            value={this.state.controls.email.value}
            elementType={this.state.controls.email.elementType}
            hasValidity
            touched={this.state.controls.email.touched}
            elementConfig={this.state.controls.email.elementConfig}
          />
        </div>

        <div className="form-group mr-lg-5 mr-md-0 mb-4  ">
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
              elementConfig={this.state.controls.password.elementConfig}
            />

            <span className="eyeicon">
              <i className="fas fa-eye-slash"></i>
            </span>
          </div>
          <div className=" d-flex justify-content-start  mt-1 ">
            <a href="/email " className="forget-text">
              هل نسيت كلمه المرور؟
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-color " onClick={this.submit}>
            تسجيل الدخول
          </button>
        </div>
        <div className=" text-center mt-5 mb-5">
                <a href="/signup" className="linkStyle text-white">
                  انشئ الحساب
                </a>
              </div>
      </form>
    );

    if (this.props.loading) {
      form = <Spiner />;
    }
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row  ">
            <div
              className="col-lg-6 pt-5 pl-5 col-md-12 mb-5 wow fadeInRight order-lg-1 order-md-2 bg-white "
              data-wow-delay="1s"
            >
            
              <img
                src={img}
                alt="loginimg"
                title="loginimg"
                className="img-fluid ml-5"
              />
              <div className="d-flex justify-content-center mt-5 text-center">
                <a href="#" className="linkStyle">
                موقع لجنه الخدمات للمستثمرين بالمنطقة الصناعية 
اهداء من جامعة قناة السويس
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 mb-5  order-lg-2 order-md-1 wow fadeInLeft align-items-center form-color"
              data-wow-delay="1s"
            >
              {error}
              {form}
              
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(actions.authSignIn(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
/*  */
