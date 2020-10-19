
import React from "react";
import "./styles/home.css"
import img from "../2.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
const wow = new WOW();
wow.init();

function Employees() {

  
  $(document).ready(function() {
    $("#click").click(function() {
       $("#search").addClass("animated fadeInLeft").toggle();
    
     });
    
  });
 
  // document.getElementById("click").addEventListener("click", function(){

  // })
  /* if(employes.length>9)setL('100%')
   */
  return (
   <div className="container-fluid p-0">
     <div className="home-bg">
     <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">
    <img src={img} className="img-fliud" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <a className="nav-link" href="#">الصفحه الرئيسيه </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/paper">الاوراق المطلوبه</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        الطلبات  
        </a>
        
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">نموذج طلب</a>
          <a className="dropdown-item" href="#">نموذج معاينه</a>
          <a className="dropdown-item" href="#">نموذج متابعة</a>
          <a className="dropdown-item" href="#">نموذج مخلفات</a>
          <a className="dropdown-item" href="#">نموذج إقامه مشروع</a>
        </div>
      </li>
   
    </ul>
    <span className="navbar-text ml-xl-5 ml-md-0">
   
  <form className="form-inline">
    <input className="form-control ml-2" type="search" placeholder="بحث عن" aria-label="Search" id="search"/>
     <span className="bg-light   rounded-circle text-dark" id="click">
     <i className="fas fa-search"></i>
     </span>

    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>

    </span>
  </div>
</nav>
      <p className="text text-center text-white">
        اهلا بكم
        <br/>
        تقدر تقدم طلباتك
    
        الان عن طريق
        
        موقعنا
        <a className="btn  d-block mt-3 mx-auto">الاوراق المطلوبه</a>
      </p>
     </div>
   </div>
  );
}

export default Employees;
