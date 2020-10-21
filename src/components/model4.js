import React, { Component } from "react";
import "./styles/model.css";
import img from "../2.png";
import done from "./images/done.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import $ from "jquery";
import Axios from "../axios";

const wow = new WOW();
wow.init();
class Model extends Component {
  constructor() {
    super();

    this.state = {
      numberOfRemains: "",
      fees: "",
      type: "remains",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("/orders", this.state, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    $(document).ready(function () {
      $("#click").click(function () {
        $("#search").addClass("animated fadeInLeft").show();
      });
      $(".finish").hide();
      $("#done").click(function (e) {
        e.preventDefault();
        $(".finish").show();
        $(".hide").hide();
      });
      $(".navbar-collapse ").css({
        "background-color": "#636363",
      });

      var homeNAV = $("#home-nav");
      var offset = homeNAV.offset();
      $("#nav").css({
        "background-color": "#636363",
      });
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > offset.top) {
          $("#nav").css({
            "background-color": "#000000",
          });
          $(".navbar-collapse ").css({
            "background-color": "#000000",
          });
        } else {
          $("#nav").css({
            "background-color": "#636363",
          });
          $(".navbar-collapse").css({
            "background-color": "#636363",
          });
        }
      });
    });
    return (
      <div>
        <div className="hide">
          <div id="home-nav">
            <nav
              className="navbar navbar-expand-lg navbar-light fixed-top bg "
              id="nav"
            >
              <a className="navbar-brand" href="true">
                <img src={img} className="img-fliud" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarText">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="/user">
                      الصفحه الرئيسيه{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/paper">
                      الاوراق المطلوبه
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="true"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      الطلبات
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a className="dropdown-item" href="/model2">
                        نموذج معاينه
                      </a>
                      <a className="dropdown-item" href="/model3">
                        نموذج متابعة
                      </a>
                      <a className="dropdown-item" href="/model4">
                        نموذج مخلفات
                      </a>
                      <a className="dropdown-item" href="/model5">
                        نموذج إقامه مشروع
                      </a>
                    </div>
                  </li>
                </ul>
                <span className="navbar-text ml-xl-5 ml-md-0 d-flex">
                  <form className="form-inline">
                    <input
                      className="form-control ml-2"
                      type="search"
                      placeholder="بحث عن"
                      aria-label="Search"
                      id="search"
                    />
                    <span
                      className="bg-light   rounded-circle text-dark"
                      id="click"
                    >
                      <i className="fas fa-search"></i>
                    </span>

                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                  </form>
                  <a href="true" className="text-white mr-3 mt-1">
                    تسجيل الخروج
                  </a>
                </span>
              </div>
            </nav>
          </div>
          <section className="text-center">
            <h2>نموذج مخلفات</h2>

            <form className="  container ml-5 ">
              <div className="row d-flex justify-content-center">
                <div className="form-group   mb-4 col-lg-5 col-md-10">
                  <input
                    type="number"
                    className=" form-control "
                    placeholder=" عدد المخلفات"
                    name="numberOfRemains"
                    value={this.numberOfRemains}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group   mb-4 col-lg-5 col-md-10">
                  <input
                    type="number"
                    className=" form-control "
                    placeholder=" الرسوم "
                    name="fees"
                    value={this.fees}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3  ml-5 pl-5">
                <button
                  className="btn btn-color ml-5 "
                  id="done"
                  type="submit"
                  onClick={this.submitHandler}
                >
                  اتمام الطلب
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="finish">
          <div className="done text-center mt-2">
            <img src={done} className="img-fluid" alt="done" />
            <p>
              لقد تم ملء طلبك بنجاح
              <br />
              سوف يتم الرد عليك
              <br />
              عن طريق ايميلك
              <br />
              dina@gmail <br />
              <a href="/user" className="btn btn-color">
                {" "}
                الصفحه الرئيسيه
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Model;
