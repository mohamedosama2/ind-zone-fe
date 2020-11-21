import React, { Component } from "react";
import "./styles/model.css";
import img from "../2.png";
import {connect} from 'react-redux'

import done from "./images/done.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { NavLink } from "react-router-dom";
import { WOW } from "wowjs";
import $ from "jquery";
import Axios from "../axios";
import Spiner from "./Spiner/Spiner";

const wow = new WOW();
wow.init();
class Model extends Component {
  constructor() {
    super();

    this.state = {
      specifiedArea: "",
      usedArea: "",
      openArea: "",
      LegalStructuralRatio: "",
      structuralRatioOnNature: "",
      statusOfBuildingPermit: "",
      statusOfOperating: "",
      violations: "",
      reportPreviewOnNature: "",
      notes: "",
      activity: "",
      holderOfTheSite: "",
      /*       type: "follow",
       */
      error: null,
      loading: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    try {
      e.preventDefault();
      this.setState({ loading: true, error: null });
      if (
        this.state.specifiedArea &&
        this.state.usedArea &&
        this.state.openArea &&
        this.state.LegalStructuralRatio &&
        this.state.structuralRatioOnNature &&
        this.state.statusOfBuildingPermit &&
        this.state.statusOfOperating &&
        this.state.violations &&
        this.state.reportPreviewOnNature &&
        this.state.notes &&
        this.state.activity &&
        this.state.holderOfTheSite
      ) {
        await Axios.post(
          "/orders",
          {
            specifiedArea: this.state.specifiedArea,
            usedArea: this.state.usedArea,
            LegalStructuralRatio: this.state.LegalStructuralRatio,
            structuralRatioOnNature: this.state.structuralRatioOnNature,
            openArea: this.state.openArea,
            statusOfBuildingPermit: this.state.statusOfBuildingPermit,
            statusOfOperating: this.state.statusOfOperating,
            violations: this.state.violations,
            reportPreviewOnNature: this.state.reportPreviewOnNature,
            notes: this.state.notes,
            activity: this.state.activity,
            holderOfTheSite: this.state.holderOfTheSite,
            type: "follow",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        $(".finish").show();
        $(".hide").hide();
      } else {
        let er = (
          <div className="alert alert-danger m-auto w-50" role="alert">
            "You must Fill all options"
          </div>
        );
        this.setState({ error: er, loading: false });
      }
    } catch (error) {
      if (error.response) {
        let er = (
          <div className="alert alert-danger m-auto w-50" role="alert">
            {error.response.data.message
              ? error.response.data.message
              : error.response.data.errors}
          </div>
        );
        this.setState({ error: er, loading: false });
      } else {
        let er = (
          <div className="alert alert-danger m-auto w-50" role="alert">
            "Internal Server Error"
          </div>
        );
        this.setState({ error: er, loading: false });
      }
    }
  };

  render() {
    $(document).ready(function () {
      $("#click").click(function () {
        $("#search").addClass("animated fadeInLeft").toggle();
      });
      $(".finish").hide();

      $(".navbar-collapse ").css({
        "background-color": "#57B7B6",
      });
      var homeNAV = $("#home-nav");
      var offset = homeNAV.offset();
      $("#nav").css({
        "background-color": "#57B7B6",
      });
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > offset.top) {
          $("#nav").css({
            "background-color": "#367d7c",
          });
          $(".navbar-collapse ").css({
            "background-color": "#367d7c",
          });
        } else {
          $("#nav").css({
            "background-color": "#57B7B6",
          });
          $(".navbar-collapse").css({
            "background-color": "#57B7B6",
          });
        }
      });
    });
    var a = document.querySelector(".spinner-wrapper");
    setTimeout(() => {
      a.style.display = "none";
    }, 100);

    let form = (
      <form className="  container ml-5 ">
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="مساحه مخصصه"
              name="specifiedArea"
              value={this.state.specifiedArea}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="مساحه مستغله "
              name="usedArea"
              value={this.state.usedArea}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="مساحه الفضاء"
              name="openArea"
              value={this.state.openArea}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="number"
              className=" form-control "
              placeholder="النسبه البنائيه القانونيه "
              name="LegalStructuralRatio"
              value={this.state.LegalStructuralRatio}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="number"
              className=" form-control "
              placeholder="النسبه البنائيه على الطبيعة "
              name="structuralRatioOnNature"
              value={this.state.structuralRatioOnNature}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder=" الموقف من ترخيص البناء"
              name="statusOfBuildingPermit"
              value={this.state.statusOfBuildingPermit}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder=" الموقف من التشغيل"
              name="statusOfOperating"
              value={this.state.statusOfOperating}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="  الحائز للموقع وصفته"
              name="holderOfTheSite"
              value={this.state.holderOfTheSite}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="نوع النشاط"
              name="activity"
              value={this.state.activity}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="المخالفات ايا كان نوعها"
              name="violations"
              value={this.state.violations}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="تقرير المعاينه على الطبيعة"
              name="reportPreviewOnNature"
              value={this.state.reportPreviewOnNature}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group   mb-4 col-lg-10 col-md-10 d-flex justify-content-center">
            <textarea
              type="text"
              className=" form-control "
              placeholder="ملاحظات"
              name="notes"
              value={this.state.notes}
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
    );

    if (this.state.loading) form = <Spiner />;

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
                  <NavLink to="/logout" className="text-white mr-3 mt-1">
                    تسجيل الخروج
                  </NavLink>
                </span>
              </div>
            </nav>
          </div>
          <section className="text-center">
            {this.state.error}
            <h2>نموذج متابعة</h2>

            {form}
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
              {this.props.email} <br />
              <a href="/user" className="btn btn-color">
                {" "}
                الصفحه الرئيسيه
              </a>
            </p>
          </div>
        </div>
        <footer className="d-flex justify-content-center p-3">
               حقوق النشر محفوظة لطلاب كلية الحاسبات والمعلومات جامعة قناة السويس
            </footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email:state.auth.email
  };
};


export default connect(mapStateToProps)(Model);
