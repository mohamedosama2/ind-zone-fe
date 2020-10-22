import React, { useEffect, useState } from "react";
import "./styles/dashboard.css";
import img from "./images/main-banner.jpg";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import { NavLink } from "react-router-dom";
import Axios from "../axios";
import Spiner from "./Spiner/Spiner";
const wow = new WOW();
wow.init();

function Employees() {
  const [employes, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("/employees", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res) {
          if (res.data) {
            setEmployees(res.data);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);


const del=async(id)=>{
  try{
    let e;
    e=  employes.filter(em=>{
      return em.id !==id
    })
    setEmployees(e)  
            await Axios.delete(`/employees/${id}`,{
              headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
              }
            })
  }catch(err){
    console.log(err.response)
  }
}

  let body = employes.map((em) => {
    return (
      <div className="mx-auto" key={em.id}>
        <div className="card  mb-3" key={em.id}>
          <div className="card-body col-lg-12   col-md-6  ">
            <div className="row">
              <h5 className="card-title col-lg-3 col-md-6">{em.username}</h5>
              <p className="card-text col-lg-2 col-md-6">{em.role}</p>
              {/* </div> */}
              {/* <div className="card-body p- col-lg-8  col-sm-12"> */}
              <a href="true" className="card-link col-lg-3 col-md-6 text-dark">
                {em.email}
              </a>
              <p className="card-link col-lg-2 col-md-6">{em.phone}</p>
              <span className="icon" style={{cursor:'pointer'}} onClick={()=>del(em.id)} >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });
  if (loading) {
    body = <Spiner />;
  }

  var a = document.querySelector(".spinner-wrapper");
  setTimeout(() => {
    a.style.display = "none";
  }, 100);
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
            <a href="true" className="navbar-brand text-white mt-1 ml-5">
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
                  <NavLink  to="/admin/dashboard" className="nav-NavLink ml-5 text-white" >
                    اضافه موظف{" "}
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink  to="/admin/empoyees" className="nav-NavLink ml-5 text-white" >
                    عرض الموظفون
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/admin/order" className="nav-NavLink ml-5 text-white" >
                    عرض الطلبات
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/logout" className="nav-NavLink ml-5 text-white" >
                    تسجيل الخروج
                  </NavLink>
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
                  to="/admin/order"
                  className="  d-flex justify-content-start pr-5 pt-2 pb-2 text-white"
                  exact
                >
                  <span className="ml-2">
                    <i className="fas fa-users"></i>
                  </span>
                  عرض الطلبات
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
                <a className="navbar-brand " href="true">
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
            <section className="col-12 mt-3">
              {body}
             {/*  <div className="number d-flex justify-content-center mt-3 ">
                1 2 3 ... <a href="true">التالى</a>
              </div> */}
            </section>
           
          </div>
        </div>
      </div>
      <footer className="d-flex justify-content-center p-3 bg-white text-dark">
               حقوق النشر محفوظة لطلاب كلية الحاسبات والمعلومات جامعة قناة السويس
            </footer>
    </div>
  );
}

export default Employees;
