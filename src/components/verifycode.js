import React, { useState } from "react";
import "./styles/authentication.css";
import img from "./images/login.png";
import logo from "../2.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import Axios from "../axios";
import { WOW } from "wowjs";
const wow = new WOW();
wow.init();

function ChangeCode(props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [err, setErrr] = useState();

  async function submit(event) {
    try {
      event.preventDefault();
      const str = "";
      const s = str.concat( e, d, c, b, a);

      const res = await Axios.post("/verify", {
        email: props.match.params.email,
        code: s,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);

      props.history.push("/");
    } catch (err) {
      let error = (
        <div class="alert alert-danger m-auto" role="alert">
          {err.response ? err.response.data.message : "internal server error"}
        </div>
      );
      setErrr(error);
    }
  }
  var s = document.querySelector(".spinner-wrapper");
  setTimeout(() => {
    s.style.display = "none";
  }, 100);
  return (
    <div>
      <section className=" container loginsection  mt-5 ">
        <div className="row">
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

          <div className="col-lg-6 col-md-12 mb-5 pr-5 order-lg-2 order-md-1 wow fadeInLeft pt-5 form-color " data-wow-delay="1s">
          <img src={logo} alt="logo" className="size d-flex justify-content-end mb-5"></img>
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
                <a
                  href="true"
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
                <button className="btn btn-color px-4 " onClick={submit}>
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
