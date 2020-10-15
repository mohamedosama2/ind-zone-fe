import React, { useState } from "react";
import "./styles/authentication.css";
import loginimg from "./images/login.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import Axios from "../axios";
const wow = new WOW();
wow.init();

function ChangeCode(props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [err, setErrr] = useState();
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  async function submit(event) {
    try {
      event.preventDefault();
      let error;
      const str = "";
      const s = str.concat( e, d, c, b, a);
      if (!( e && d && c && b && a && password && confirmedPassword)) {
        error = (
          <div class="alert alert-danger m-auto" role="alert">
            Fill the fields
          </div>
        );
        return setErrr(error);
      }
      if (password !== confirmedPassword) {
        error = (
          <div class="alert alert-danger m-auto" role="alert">
            Not Match
          </div>
        );
        setErrr(error);
      } else {
        setErrr(null);
        await Axios.post("/reset-password", {
          email: props.match.params.email,
          code: s,
          password,
        });
        props.history.push("/"); //////////////////////////////////////////////////////////////////////////////////lsaaaaaaa
      }
    } catch (err) {
      let error = (
        <div class="alert alert-danger m-auto" role="alert">
          {err.response.data.message}
        </div>
      );
      setErrr(error);
    }
  }

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

          <div className="col-lg-6 col-md-12 mb-5 mt-5 order-lg-2 order-md-1 wow fadeInLeft pt-5 ">
            <p className="colortext d-flex justify-content-start">
              تم ارسال رمز التحقيق على الايميل الخاص بك
            </p>
            {err}
            <form className="  mt-5  ">
              <div className="text d-flex justify-content-start ">
                <p>ادخل رمز التحقيق </p>
              </div>

              <div className="form-group   mb-4  ">
                <div className="d-flex ">
                  <input
                    type="number"
                    className=" size ml-2"
                    onChange={(e) => setA(e.target.value)}
                  />
                  <input
                    type="number"
                    className=" size ml-2"
                    onChange={(e) => setB(e.target.value)}
                  />
                  <input
                    type="number"
                    className=" size ml-2"
                    onChange={(e) => setC(e.target.value)}
                  />
                  <input
                    type="number"
                    className=" size ml-2"
                    onChange={(e) => setD(e.target.value)}
                  />
                  <input
                    type="number"
                    className=" size ml-2"
                    onChange={(e) => setE(e.target.value)}
                  />

                </div>

                <div className="form-group  mb-4 mt-3 ">
                  <div className="d-flex">
                    <span className="icon">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder=" رقم المرور الجديده"
                      onChange={(e) => setPassword(e.target.value)}
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
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="تاكيد رقم المرور الجديده "
                      onChange={(e) => setConfirmedPassword(e.target.value)}
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
                      email: props.match.params.email,
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
                  onClick={submit}
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

export default ChangeCode;