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
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(`/orders?limit=6&&page=${page}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setLoading(false);
        setPosts(data);
        setPages(data.totalPages);
      } catch (err) {
        setLoading(false);
        console.log(err.response);
      }
    };
    fetch();
  }, [page]);
  const hr = (e) => {
    e.preventDefault();
    setPage(e.target.textContent);
  };
  const clicked = (e) => {
    e.preventDefault();
  };
  let arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.unshift(i);
  }

  /* if(employes.length>9)setL('100%')
   */
  var a = document.querySelector(".spinner-wrapper");
  setTimeout(() => {
    a.style.display = "none";
  }, 100);



let body=null;
body=
  posts.docs
    ? posts.docs.map((p) => {
        return (
          <div
            className="card  mb-3 col-lg-6 col-md-12 mx-auto"
            key={p.createdAt}
          >
            <div className="card-body col-lg-12      ">
              <div className="row px-5">
                <p> {p.customer.username}</p>
                <p className="text-color mr-5 col-lg-5 col-md-10">
                  {p.type}
                </p>
                <a
                  className="icon mr-5"
                  href={`/${p.type}/${p.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })
    : ""

if(loading){
  body=<Spiner />
}



  return (
    <div className="container-fluid size">
      <div className="row">
        {/* Nav in small screen */}
        <nav className="navbar small-screen navbar-light col-12 text-white align-items-start  d-xl-none d-lg-none d-md-block d-sm-block">
          <div className="d-flex">
            <div className="row">
              <div className="img col-md-3  mt-2  d-block">
                <img src={img} alt="email-img" title="email-img" />
                <p className="">دينا سمير</p>
              </div>
            </div>
            <a className="navbar-brand text-white mt-1 ml-5" href="true">
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
                <a className="nav-NavLink ml-5 text-white" href="true">
                  اضافه موظف{" "}
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-NavLink ml-5 text-white" href="true">
                  عرض الموظفون
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-NavLink ml-5 text-white" href="true">
                  عرض الطلبات
                </a>
              </li>
              <li className="nav-item ">
                {/*                   <a className="nav-NavLink ml-5 text-white" href="true">
                    تسجيل الخروج
                  </a> */}
                <NavLink to="/logout" className="nav-NavLink ml-5 text-white">
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
                  src={img}
                  className=" img-fluid  mt-5 mr-5"
                  alt="email-img"
                  title="email-img"
                />
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

              {/* <div className="card  mb-3 col-lg-6 col-md-12 mx-auto">
                <div className="card-body col-lg-12      ">
                  <div className="row px-5">
                    <p> احمد محمد محمود</p>
                    <p className="text-color mr-5 col-lg-5 col-md-10">
                      نموذج إقامه مشروع
                    </p>

                    <a className="icon mr-5" href="/Project" target="_blank">
                      <i className="fas fa-eye"></i>
                    </a>
                  </div>
                </div>
              </div> */}

              <div
                onClick={clicked}
                style={{ textAlign: "center" }}
                className="number d-flex justify-content-center mt-3 "
              >
                {arr.map((i) => {
                  return (
                    <a href="true" onClick={hr}>
                      {" "}
                      {i}
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
