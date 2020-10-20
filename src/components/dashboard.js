import React, { Component } from "react";
import "./styles/dashboard.css";
import img from "./images/main-banner.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import Input from "./Input/Input";
import { updatedObject, checkValidity } from "../shared/shared";
import Axios from "../axios";
// import WithErrorHandler from "./withErrorHandler/withErrorHandler";
import { NavLink } from "react-router-dom";
const wow = new WOW();
wow.init();

class Dashboard extends Component {
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
      phone: {
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
      address: {
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: " العنوان ",
          id: "address",
        },
        touched: false,
      },
      date: {
        value: "",
        valid: false,
        validation: {
          required: true,
        },
        elementType: "input",
        elementConfig: {
          type: "date",
          placeholder: "تاريخ الميلاد",
          id: "date",
        },
        touched: false,
      },
      NationalID: {
        value: "",
        valid: false,
        validation: {
          required: true,
          maxLength: 14,
          minLength: 14,
        },
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: " الرقم القومى ",
          id: "num",
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
          type: "password",
          placeholder: " كلمة المرور  ",
          id: "password",
        },
        touched: false,
      },
      job: "secretary",
    },
    error: null,
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

  add = async (e) => {
    try {
      e.preventDefault();
      if (
        this.state.controls.NationalID.valid &&
        this.state.controls.name.valid &&
        this.state.controls.email.valid &&
        this.state.controls.phone.valid &&
        this.state.controls.date.valid &&
        this.state.controls.address.valid &&
        this.state.controls.job &&
        this.state.controls.password.valid
      ) {
        const token = localStorage.getItem("token");
        this.setState({ error: null });
        await Axios.post(
          "/register/employee",
          {
            nationalNumber: this.state.controls.NationalID.value,
            username: this.state.controls.name.value,
            email: this.state.controls.email.value,
            phone: this.state.controls.phone.value,
            /*  date: this.state.controls.date.value, */
            address: this.state.controls.address.value,
            role: this.state.controls.job,
            password: this.state.controls.password.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        window.location.href = "/admin/dashboard";
      } else {
        let error = (
          <div class="alert alert-danger w-75" role="alert">
            Must fill all Choices
          </div>
        );
        this.setState({ error });
      }
    } catch (error) {
      if (error.response) {
        let er = (
          <div class="alert alert-danger m-auto" role="alert">
            {error.response.data.message
              ? error.response.data.message
              : error.response.data.errors}
          </div>
        );
        this.setState({ error: er });
      } else {
        let er = (
          <div class="alert alert-danger m-auto" role="alert">
            "Internal Server Error"
          </div>
        );
        this.setState({ error: er });
      }
    }
  };

  render() {
    return (
      <div className="container-fluid size">
        <div className="row">
          {/* Nav in small screen */}
          <nav className="navbar small-screen navbar-light col-12 text-white align-items-start  d-xl-none d-lg-none d-md-block d-sm-block">
            <div className="d-flex">
              <div className="row">
                <div className="img col-md-3  mt-2  d-block">
                  <img alt="admin-img" src={img} />
                  <p className="">دينا سمير</p>
                </div>
              </div>
              <a href className="navbar-brand text-white mt-1 ml-5">
                لوحه التحكم
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-5 ">
                <li className="nav-item active">
                  <a className="nav-NavLink ml-5 text-white" href>
                    اضافه موظف{" "}
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-NavLink ml-5 text-white" href>
                    عرض الموظفون
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-NavLink ml-5 text-white" href>
                    عرض الطلبات
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-NavLink ml-5 text-white" href>
                    تسجيل الخروج
                  </a>
                </li>
                <li>
                  <form className="d-flex col-10 mr-auto mt-2 ">
                    <span className="icon">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      className="form-control pr-5"
                      type="search"
                      placeholder="بحث عن   "
                      aria-label="Search"
                    />
                  </form>
                </li>
              </ul>
            </div>
          </nav>

          <aside className="sidebar col-2 d-none d-lg-block d-xl-block text-white">
            <div className="row">
              <div className="info col-12 mt-2  d-block">
                <div className="row ">
                  <img
                    alt="dina"
                    src={img}
                    className=" img-fluid  mt-5 mr-5"
                  ></img>
                  <p className=" mt-3 col-10 d-flex justify-content-center">
                    دينا سمير
                  </p>
                  <p className="mt-1 col-10 d-flex justify-content-center">
                    Dina@gmail.com
                  </p>
                  <NavLink
                    activeStyle={{
                      background: "#64b5f6",
                      width: "100%",
                    }}
                    to="/admin/dashboard"
                    className="  d-flex justify-content-start pr-5 pt-2 pb-2 text-white"
                    exact
                  >
                    <span className="ml-2">
                      <i className="fas fa-plus-square"></i>
                    </span>
                    اضافه موظف
                  </NavLink>

                  <NavLink
                    activeStyle={{ background: "#64b5f6", width: "100%" }}
                    to="/admin/empoyees"
                    className="  d-flex justify-content-start pr-5 pt-2 pb-2 text-white"
                    exact
                  >
                    <span className="ml-2">
                      <i className="fas fa-users"></i>
                    </span>
                    عرض الموظفون
                  </NavLink>
                  <NavLink
                    activeStyle={{ background: "#64b5f6", width: "100%" }}
                    to="/logout"
                    className="  d-flex justify-content-start pr-5 pt-2 pb-2 text-white"
                    exact
                  >
                    <span className="ml-2">
                      <i className="fas fa-sign-out-alt"></i>
                    </span>
                    تسجيل الخروج
                  </NavLink>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-10">
            <div className="row">
              <nav className="navbar navbar-light col-12 align-items-start pt-3 px-5 d-none d-lg-block d-xl-block">
                <div className="d-flex">
                  <a className="navbar-brand " href>
                    لوحه التحكم
                  </a>
                  <form className="d-flex ml-auto mr-5 ">
                    <span className="icon">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      className="form-control pr-5"
                      type="search"
                      placeholder="بحث عن   "
                      aria-label="Search"
                    />
                  </form>
                  <div className="socail-icon">
                    <ul className="d-flex text-color ">
                      <li className="ml-5 text-color ">
                        <i className="fas fa-envelope"></i>
                      </li>
                      <li className="ml-5 mt-1 d-flex">
                        <div className="num">2</div>
                        <i className="fas fa-bell"></i>
                      </li>
                      <li className="ml-5  ">
                        <i className="fas fa-sign-in-alt"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <section className="add col-12 p-5">
                <h4>إضافة موظف</h4>
                {this.state.error}
                <form className=" mr-5 mt-5 ">
                  <div className="row">
                    <div className="form-group col-lg-6 col-md-12    mb-4 d-flex">
                      <span className="icon">
                        <i className="fas fa-user-alt"></i>
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
                    <div className="form-group col-lg-6 col-md-12    mb-4 d-flex">
                      <span className="icon">
                        {" "}
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.phone.valid}
                        changed={(e) => this.on(e, "phone")}
                        value={this.state.controls.phone.value}
                        elementType={this.state.controls.phone.elementType}
                        hasValidity
                        touched={this.state.controls.phone.touched}
                        elementConfig={this.state.controls.phone.elementConfig}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-12  date  mb-4 d-flex">
                      <Input
                        inValid={!this.state.controls.date.valid}
                        changed={(e) => this.on(e, "date")}
                        value={this.state.controls.date.value}
                        elementType={this.state.controls.date.elementType}
                        hasValidity
                        touched={this.state.controls.date.touched}
                        elementConfig={this.state.controls.date.elementConfig}
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-12    mb-4 d-flex">
                      <span className="icon">
                        {" "}
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.address.valid}
                        changed={(e) => this.on(e, "address")}
                        value={this.state.controls.address.value}
                        elementType={this.state.controls.address.elementType}
                        hasValidity
                        touched={this.state.controls.address.touched}
                        elementConfig={
                          this.state.controls.address.elementConfig
                        }
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-12  date  mb-4 d-flex">
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
                    <div className="form-group col-lg-6 col-md-12    mb-4 d-flex">
                      <span className="icon">
                        {" "}
                        <i className="fas fa-id-card"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.NationalID.valid}
                        changed={(e) => this.on(e, "NationalID")}
                        value={this.state.controls.NationalID.value}
                        elementType={this.state.controls.NationalID.elementType}
                        hasValidity
                        touched={this.state.controls.NationalID.touched}
                        elementConfig={
                          this.state.controls.NationalID.elementConfig
                        }
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-12  date  mb-4 d-flex">
                      <span className="icon">
                        <i className="fas fa-portrait"></i>
                      </span>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={(e) => {
                          let controls = this.state.controls;
                          controls.job = e.target.value;
                          this.setState({ controls });
                          console.log(e.target.value);
                        }}
                      >
                        <option value="secretary">سكرتارية</option>
                        <option value="accountant">حسابات</option>
                        <option value="technician">مكتب فنى</option>
                        <option value="treasury">خزينة</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-6 col-md-12    mb-4 d-flex">
                      <span className="icon">
                        {" "}
                        <i className="fas fa-lock"></i>
                      </span>
                      <Input
                        inValid={!this.state.controls.password.valid}
                        changed={(e) => this.on(e, "password")}
                        value={this.state.controls.password.value}
                        elementType={this.state.controls.password.elementType}
                        hasValidity
                        touched={this.state.controls.password.touched}
                        elementConfig={
                          this.state.controls.password.elementConfig
                        }
                      />
                    </div>
                    <div className="mt-3 col-lg-6 col-md-12 mx-auto ">
                      <button
                        className="btn btn-color "
                        onClick={this.add}
                        type="submit"
                      >
                        {" "}
                        إضافه موظف
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
