import React, { Component } from "react";
import "./styles/model.css";
import img from "../2.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import { WOW } from "wowjs";
import $ from 'jquery';
const wow = new WOW();
wow.init();
class Model extends Component {
    render(){
      $(document).ready(function() {
        $("#click").click(function() {
          $("#search").addClass("animated fadeInLeft").show();
        
         });
         $(".finish").hide();
         $("#done").click(function(e) {
             e.preventDefault();
            $(".finish").show();
            $(".hide").hide();
         
          });
          $(".navbar-collapse " ).css({
            "background-color":"#636363", 
            
         })
  
         var homeNAV = $("#home-nav");
         var offset = homeNAV.offset();
         $("#nav").css({
          "background-color":"#636363", 
          
       })
         $(window).on("scroll",function(){
          
            if($(window).scrollTop()>offset.top){
                $("#nav").css({
                   "background-color":"#000000",     
                   
                })
                $(".navbar-collapse " ).css({
                  "background-color":"#000000", 
                  
               })
            
            }else{
               $("#nav").css({
                   "background-color":"#636363", 
                   
                })
                $(".navbar-collapse").css({
                  "background-color":"#636363", 
                  
               })  
            }
          })
           
           
      });
        return(
          <div>
            <div id="home-nav">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top bg " id="nav">
                <a className="navbar-brand" href="true">
                  <img src={img} className="img-fliud" alt="logo" />
                </a>
                <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarText">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                      <a className="nav-link" href="/user">الصفحه الرئيسيه </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/paper">الاوراق المطلوبه</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="true" id="navbarDropdownMenuLink" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        الطلبات
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/model1">نموذج طلب</a>
                        <a className="dropdown-item" href="/model2">نموذج معاينه</a>
                        <a className="dropdown-item" href="/model3">نموذج متابعة</a>
                        <a className="dropdown-item" href="/model4">نموذج مخلفات</a>
                        <a className="dropdown-item" href="/model5">نموذج إقامه مشروع</a>
                      </div>
                    </li>
                  </ul>
                  <span className="navbar-text ml-xl-5 ml-md-0 d-flex">
        
                    <form className="form-inline">
                      <input className="form-control ml-2" type="search" placeholder="بحث عن" aria-label="Search" id="search" />
                      <span className="bg-light   rounded-circle text-dark" id="click">
                        <i className="fas fa-search"></i>
                      </span>
        
                      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    <a href="true" className="text-white mr-3 mt-1">تسجيل الخروج</a>
        
                  </span>
                </div>
              </nav>
            </div>
            <section className="text-center">
              <h2>نموذج إقامه مشروع</h2>
              <p className="mt-4">الخطوه الاولى :معلوماتك الشخصيه</p>
              <form className="  container ml-5 ">
        
        
                <div className="row d-flex justify-content-center">
                  <div className="form-group   mb-4 col-lg-5 col-md-10">
        
                    <input type="text" className=" form-control " id="address" placeholder="مقيم فى" />
                  </div>
                  <div className="form-group   mb-4 col-lg-5 col-md-10">
        
                    <input type="text" className=" form-control " id="Nationality" placeholder="الجنسيه " />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="form-group   mb-4 col-lg-5 col-md-10">
        
                    <input type="tel" className=" form-control " id="phone" placeholder=" رقم المحمول" />
                  </div>
                  <div className="form-group   mb-4 col-lg-5 col-md-10">
        
                    <input type="email" className=" form-control " id="Email" placeholder="البريد الالكترونى " />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="form-group   mb-4 col-lg-7 col-md-10">
      
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option disabled selected hidden>حيث ارغب في أقامه مشروع صناعي بالمنطقة الصناعية </option>
                      <option>الاولى</option>
                      <option>التانيه</option>
                    </select>
                  </div>
                </div>  
          
                <div className="d-flex justify-content-center mt-3  ml-5 pl-5">
                  <a href="/secondpagemodel5" className="btn btn-color ml-5 ">الخطوه التاليه</a>
                </div>
              </form>
            </section>
          </div>
        )
    }
}
export default Model