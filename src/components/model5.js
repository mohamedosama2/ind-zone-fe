import React, { Component } from "react";
import "./styles/model.css";
import img from "../2.png";
import done from "./images/done.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import Spiner from "./Spiner/Spiner";
import { WOW } from "wowjs";
import $ from "jquery";
import Axios from "../axios";

const wow = new WOW();
wow.init();
class Model extends Component {
  constructor() {
    super();

    this.state = {
      nameOfOwner: "",
      nameOfProject: "",
      city: "",
      nationality: "",
      industrialArea: "",
      activity: "",
      requiredArea: "",
      workingCapital: "",
      cost: "",
      employment: "",
      legalStatus: "",
      duration: "",
      marketingSystem: "",
      expectedAnnualProductionAmount: "",
      /* type: "project", */
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
      this.setState({ error: null, loading: true });
      if (
        this.state.nameOfOwner &&
        this.state.nameOfProject &&
        this.state.city &&
        this.state.nationality &&
        this.state.industrialArea &&
        this.state.activity &&
        this.state.requiredArea &&
        this.state.workingCapital &&
        this.state.cost &&
        this.state.employment &&
        this.state.legalStatus &&
        this.state.duration &&
        this.state.marketingSystem &&
        this.state.expectedAnnualProductionAmount
      ) {
        await Axios.post(
          "/orders",
          {
            nameOfOwner: this.state.nameOfOwner,
            nameOfProject: this.state.nameOfProject,
            city: this.state.city,
            nationality: this.state.nationality,
            industrialArea: this.state.industrialArea,
            activity: this.state.activity,
            requiredArea: this.state.requiredArea,
            workingCapital: this.state.workingCapital,
            cost: this.state.cost,
            employment: this.state.employment,
            legalStatus: this.state.legalStatus,
            duration: this.state.duration,
            marketingSystem: this.state.marketingSystem,
            expectedAnnualProductionAmount: this.state
              .expectedAnnualProductionAmount,
            type: "project",
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
        $("#search").addClass("animated fadeInLeft").show();
      });
      $(".finish").hide();
      /* $("#done").click(function (e) {
        e.preventDefault();
        $(".finish").show();
        $(".hide").hide();
      }); */
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

    let form = (
      <form className="  container ml-5 ">
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              id="address"
              placeholder="مقدمه لسيادتكم"
              name="nameOfOwner"
              value={this.nameOfOwner}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              id="address"
              placeholder="مقيم فى"
              name="city"
              value={this.city}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              id="Nationality"
              placeholder="الجنسيه "
              name="nationality"
              value={this.nationality}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="industrialArea"
              value={this.industrialArea}
              onChange={this.onChangeHandler}
            >
              <option disabled selected hidden>
                بالمنطقة الصناعية
              </option>
              <option>الاولى</option>
              <option>التانيه</option>
            </select>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="اسم المشروع"
              name="nameOfProject"
              value={this.nameOfProject}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="نوع النشاط "
              name="activity"
              value={this.activity}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="المساحه المطلوبه"
              name="requiredArea"
              value={this.requiredArea}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="number"
              className=" form-control "
              placeholder="رأس مال العامل "
              name="workingCapital"
              value={this.workingCapital}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="number"
              className=" form-control "
              placeholder=" التكلفه الاستثماريه"
              name="cost"
              value={this.cost}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="number"
              className=" form-control "
              placeholder="  حجم العماله"
              name="employment"
              value={this.employment}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder=" الشكل القانونى"
              name="legalStatus"
              value={this.legalStatus}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder="  مده التنفيذ"
              name="duration"
              value={this.duration}
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <input
              type="text"
              className=" form-control "
              placeholder=" كميه الإنتاج السنوى المتوقع"
              name="expectedAnnualProductionAmount"
              value={this.expectedAnnualProductionAmount}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className="form-group   mb-4 col-lg-5 col-md-10">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="marketingSystem"
              value={this.marketingSystem}
              onChange={this.onChangeHandler}
            >
              <option disabled selected hidden>
                نظام التوسق
              </option>
              <option>داخلى</option>
              <option>خارجى</option>
            </select>
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
                      الصفحه الرئيسيه
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
                      className="dropdown-menu text-dark"
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
            {this.state.error}
            <h2>نموذج إقامه مشروع</h2>
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
              dina@gmail <br />
              <a href="/user" className="btn btn-color">
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
export default Model;
