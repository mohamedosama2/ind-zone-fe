import React, { Component, createRef } from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import Input from "../components/Input/Input";
import Spiner from '../components/Spiner/Spiner'
import { updatedObject, checkValidity } from "../shared/shared";
import { connect } from "react-redux";
import * as actions from "../store/index";
import { WOW } from "wowjs";

/////then add this to the funtion that that is called for re-rendering

const wow = new WOW();
wow.init();

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        name: {
          value: "",
          valid: false,
          validation: {
            required: true,
            minLength: 4,
          },
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "اسم المستخدم",
            id: "name",
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
        tel: {
          value: "",
          valid: false,
          validation: {
            required: true,
            isPhone: true,
          },
          elementType: "input",
          elementConfig: {
            type: "number",
            placeholder: " رقم الهاتف",
            id: "phone",
          },
          touched: false,
        },
      },
      done: false,
    };
    this.formRef = createRef();
    this.verify = createRef();
  }
  componentDidMount() {
    console.log("here");
    this.props.logout();
  }
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
    if (
      this.state.controls.name.valid &&
      this.state.controls.email.valid &&
      this.state.controls.password.valid &&
      this.state.controls.tel.valid
    ) {
      this.props.signUp(
        this.state.controls.name.value,
        this.state.controls.email.value,
        this.state.controls.password.value,
        this.state.controls.tel.value
      );
/*       this.setState({ done: true });
 */    }
  };

  render() {
    let error = null;

    if (this.props.error) {
      error = (
        <div class="alert alert-danger m-auto" role="alert">
          {this.props.error}
        </div>
      );
    }

let form=null

    if (this.props.error === null && this.props.token) {
      console.log("ssss")
      if (this.formRef.current) {
        this.formRef.current.style.display = "none";
        this.verify.current.style.display = "block";
      }
    }else{
     form=(
      <form
      className=" mr-5 mt-5 "
      onSubmit={this.submit}
      ref={this.formRef}
    >
      {error}

      <div className="text d-flex justify-content-start mt-5 mr-lg-5 mr-md-0">
        <p> أنشاء حساب</p>
      </div>
      <div className="form-group  mr-lg-5 mr-md-0 mb-4 d-flex">
        <span className="icon">
          <i class="fas fa-user-alt"></i>
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

      <div className="form-group  mr-lg-5 mr-md-0 mb-4 d-flex">
        <span className="icon">
          {" "}
          <i className="fas fa-envelope "></i>
        </span>
        <Input
          inValid={!this.state.controls.name.valid}
          changed={(e) => this.on(e, "name")}
          value={this.state.controls.name.value}
          elementType={this.state.controls.name.elementType}
          hasValidity
          touched={this.state.controls.name.touched}
          elementConfig={this.state.controls.name.elementConfig}
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
      </div>

      <div className="form-group  mr-lg-5 mr-md-0 mb-4 d-flex">
        <span className="icon">
          {" "}
          <i class="fas fa-phone-alt"></i>
        </span>

        <Input
          inValid={!this.state.controls.tel.valid}
          changed={(e) => this.on(e, "tel")}
          value={this.state.controls.tel.value}
          elementType={this.state.controls.tel.elementType}
          hasValidity
          touched={this.state.controls.tel.touched}
          elementConfig={this.state.controls.tel.elementConfig}
        />
      </div>

      <div className="d-flex justify-content-center mt-3  mr-5">
        <button href="/" className="btn btn-color ">
          {" "}
          تسجيل الحساب
        </button>
        {/* <a href="/codeofsignup" className="btn btn-color " >
          تسجيل الحساب
        </a> */}
      </div>
    </form>
    )
      }
    if(this.props.loading)form=<Spiner />

    if (this.props.error === null && this.props.token) {
        this.verify.current.style.display = "block";
      }

      var a = document.querySelector(".spinner-wrapper");
      setTimeout(() => {
        a.style.display = "none";
      }, 100);
  
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row">
            <div
              className="col-lg-6 col-md-12 mb-5 wow fadeInRight order-lg-1 order-md-2 "
              data-wow-delay="1s"
            >
              <img
                src={loginimg}
                alt="loginimg"
                title="loginimg"
                className="img-fluid"
              />
              <div className=" text-center">
                <a href="/" className="linkStyle">
                  تسجيل الدخول
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 mb-5 mt-5 order-lg-2 order-md-1 wow fadeInLeft text-center "
              data-wow-delay="1s"
            >
              <div
                style={{ display: "none", color: "black" }}
                ref={this.verify}
                className="m-auto"
              >
                <div class="alert alert-info" role="alert">
                  تحقق من بريدك للحصول على رمز التحقق
                  {/*  */}
                </div>
                <a
                  href={`/verify/${this.state.controls.email.value}`}
                  className="linkStyle"
                >
                  ادخال رمز التحقق
                </a>
              </div>
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
    token: state.auth.token,
    loading:state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, name, password, tel) =>
      dispatch(actions.authSignUp(email, name, password, tel)),
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
