import React, { Component } from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
const wow = new WOW();
wow.init();

class CodeSignup extends Component {
  render() {
    var a = document.querySelector(".spinner-wrapper");
    setTimeout(() => {
      a.style.display = "none";
    }, 100);
    return (
      <div>
        <section className=" container loginsection  mt-5 ">
          <div className="row  ">
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
              <div className="d-flex justify-content-center">
                <a href="/signup" className="linkStyle">
                  Arwaa
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 mb-5 mt-5 order-lg-2 order-md-1 wow fadeInLeft pt-5 "
              data-wow-delay="1s"
            >
              <p className="colortext d-flex justify-content-start">
                تم ارسال رمز التحقيق على الايميل الخاص بك
              </p>

              <form className="  mt-5  ">
                <div className="text d-flex justify-content-start ">
                  <p>ادخل رمز التحقيق </p>
                </div>

                <div className="form-group   mb-4  ">
                  <div className="d-flex ">
                    <input type="number" className="size ml-2" />
                    <input type="number" className="size ml-2" />
                    <input type="number" className="size ml-2" />
                    <input type="number" className="size ml-2" />
                    <input type="number" className="size ml-2" />
                    <input type="number" className="size ml-2" />
                  </div>
                  <a
                    href
                    className="colortext d-flex justify-content-start mt-1"
                  >
                    ارسال مره اخرى ؟
                  </a>
                </div>

                <div className="d-flex justify-content-center mt-3  ml-5">
                  <a href="/" className="btn btn-color px-4 ">
                    تحقق{" "}
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
export default CodeSignup;
