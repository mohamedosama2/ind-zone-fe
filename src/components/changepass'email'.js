import React, { createRef } from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { updatedObject, checkValidity } from "../shared/shared";
import Input from "../components/Input/Input";
import Axios from "../axios";

import { WOW } from "wowjs";
const wow = new WOW();
wow.init();

class ChangePassEmail extends React.Component {
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
      },
    };
    this.emailErr = createRef();
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
  send = async (e) => {
    try {
      e.preventDefault();
      if (this.state.controls.email.value) {
        const res = await Axios.post("/resend", {
          email: this.state.controls.email.value,
        });
        window.location.href = `/changepasscode/${this.state.controls.email.value}`;
      }
    } catch (err) {
      this.emailErr.current.style.display = "inline";
    }
  };

  render() {
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row  ">
            <div className="col-lg-6 col-md-12 mb-5 wow fadeInRight order-lg-1 order-md-2 ">
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

            <div className="col-lg-6 col-md-12 mb-5 mt-5 order-lg-2 order-md-1 wow fadeInLeft">
              <div
                class="alert alert-danger m-auto text-center"
                role="alert"
                ref={this.emailErr}
                style={{ display: "none" }}
              >
                Not Found
              </div>
              <form className=" mr-5 mt-5 pt-5 ">
                <div className="text d-flex justify-content-start mt-5 mr-5 -3">
                  <p>ادخل البريد الخاص بك</p>
                </div>

                <div className="form-group  mr-5 mb-4  ">
                  <div className="d-flex">
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
                    {/* <input
                    type="email"
                    className=" form-control "
                    id="Email"
                    placeholder="البريد الالكترونى"
                    onChange={e=>this.setState({})}
                  /> */}
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3  mr-5">
                  <a className="btn btn-color px-4 " onClick={this.send}>
                    متابعه{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ChangePassEmail;
