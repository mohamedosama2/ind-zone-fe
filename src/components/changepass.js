import React, { Component } from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
const wow = new WOW();
wow.init();

class Changepass extends Component {
  render() {
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row">
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
              <form className=" mr-5 mt-5 pt-5 ">
                <div className="text d-flex justify-content-start mt-5 mr-5 -3">
                  <p>ادخل كلمه المرور الجديده</p>
                </div>

                <div className="form-group mr-5 mb-4  ">
                  <div className="d-flex">
                    <span className="icon">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder=" رقم المرور الجديده"
                    />
                    <span className="eyeicon">
                      <i className="fas fa-eye-slash"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group mr-5 mb-4  ">
                  <div className="d-flex">
                    <span className="icon">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="تاكيد رقم المرور الجديده "
                    />
                    <span className="eyeicon">
                      <i className="fas fa-eye-slash"></i>
                    </span>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3  mr-5">
                  <a href="/" className="btn btn-color px-4 ">
                    تاكيد{" "}
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
export default Changepass;
