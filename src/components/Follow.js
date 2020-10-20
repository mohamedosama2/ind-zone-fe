import React, { useEffect, useState,Component } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import { NavLink } from "react-router-dom";
import Axios from "../axios";
import $ from 'jquery';

class Follow extends Component {
    render(){
             $("#print").click(function(){
                 window.print();
             })
        return(
            <div className="container preview">
                <div className="row">
                    <p className="justify-content-start mr-5 mt-5 col-6">
                    محافظه الاسماعيليه 
                    <br />
                    لجنة خدمات المنطقه الصناعية الأولى والتانية 
                   
                    </p>
                    <div className="justify-content-end  mr-auto mt-4 col-3">
                      <img src={img} className="img-fluid" alt="logo"/>
                    </div>

                    <p className="justify-content-start mr-5 mt-5 col-6">
                    بالاسماعيليه 
                     
                   
                    </p>
                    <p className="justify-content-end mr-auto  mt-5 col-4">
                      نموذج مخلفات
                    </p>
                    <hr className="col-lg-11 col-md-6  mt-0"/>
                    <p className="mx-auto text-style col-10">
                        نموذج تقرير متابعة دوري على الطبيعة
                    </p>
                    
                    <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
                    المشروع (....)
                    <br/>
                    طبقا لنص المادة 67 من قانون رقم 72 ل 2017 عن الفترة من ... الى ...
                    <p className="justify-content-start  mt-5">المساحة المخصصة</p>
                    <p className="justify-content-start  mt-5">المساحة المستغلة </p>
                    <p className="justify-content-start  mt-5">المساحة الفضاء</p>
                    <p className="justify-content-start  mt-5">النسبة البنائية القانونية </p>
                    <p className="justify-content-start  mt-5">النسبة البنائية على الطبيعة</p>
                    <p className="justify-content-start  mt-5">الموقف من ترخيص البناء </p>
                    <p className="justify-content-start  mt-5">الموقف والتشغيل </p>
                    <p className="justify-content-start  mt-5">الحائز للموقع وصفته </p>
                    <p className="justify-content-start  mt-5">نوع النشاط</p>
                    <p className="justify-content-start  mt-5">المخالفات أيا كان نوعها</p>
                    <p className="justify-content-start  mt-5">تقرير المعاينة على الطبيعة </p>
                    <p className="justify-content-start  mt-5">ملاحظات</p>






                    </p>
                    <p className=" ml-auto mr-5 col-lg-4 col-md-10 mt-3">
                        فنى المساحة
                    </p>
                   
                    <p className=" mr-auto   col-lg-4 col-md-10">
                    مدير اللجنه
                    </p>
                    
                   <div  id="print" className="icon col-7 mr-auto">
                   <i class="fas fa-print"></i> اطبع
                   </div>
                </div>

            </div>
        )
    }
}
export default Follow;