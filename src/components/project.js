import React, { useEffect, useState,Component } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import { NavLink } from "react-router-dom";
import Axios from "../axios";
import $ from 'jquery';

class Project extends Component {
    render(){
             $("#print").click(function(){
                 window.print();
             })
        return(
            <div className="container preview">
                <div className="row">
                    <p className="justify-content-start mr-5 mt-5 col-6">
                    <img src={img} className="img-fluid" alt="logo"/>

                    محافظه الاسماعيليه 
                    <br />
                    <span className="mr-5 pr-3">مكتب خدمه المستثمرين</span>                   
                    </p>
                 
                    <hr className="col-lg-11 col-md-6  mt-0"/>
                    <p className="mx-auto text-style col-10">
                        نموذج إقامه مشروع
                    </p>
                    
                    <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
                    
                    <p className="justify-content-start  mt-5">
                    مقدمه لسيادتكم                    
                    </p>
                    <p className="justify-content-start  mt-5">المساحة المستغلة </p>
                    <p className="justify-content-start  mt-5">المقيم في </p>
                    <p className="justify-content-start  mt-5">الجنسية</p>
                    <p className="justify-content-start  mt-5">تليفون </p>
                    <p className="justify-content-start  mt-5">بريد الكترونى  </p>
                    <p className="justify-content-start  mt-5">حيث ارغب في أقامه مشروع صناعي بالمنطقة الصناعية (الأولى / الثانية) </p>
                    <p className="justify-content-start  mt-5">وبيانات المشروع كالتالي: </p>
                    <p className="justify-content-start  mt-5">اسم المشروع </p>
                    <p className="justify-content-start  mt-5">نوع النشاط </p>
                    <p className="justify-content-start  mt-5">المساحة المطلوبة  </p>
                    <p className="justify-content-start  mt-5">راس المال العامل .... جنيه مصرى</p>
                    <p className="justify-content-start  mt-5">التكلفة الاستثمارية ..........  جنيه مصرى</p>
                    <p className="justify-content-start  mt-5">حجم العمالة </p>
                    <p className="justify-content-start  mt-5"> الشكل القانوني </p>
                    <p className="justify-content-start  mt-5">مده التنفيذ </p>
                    <p className="justify-content-start  mt-5">كميه الإنتاج السنوي المتوقع </p>
                    <p className="justify-content-start  mt-5">نظام التسويق: (داخلي /خارجي) </p>
                    <p className="justify-content-start  mt-5">ومستعد لتقديم أي دراسات او مستندات او بيانات او رسومات تطلب منى </p>
    
                    </p>
                    <p className=" text-center  col-12 mt-3">
                        وتفضلوا  بقبول وأفر التحيه 
                    </p>
                   
                    <p className=" mr-auto  mt-5 col-6">
                    مقدمة لسيادتكم
                    <br/>
                
                    الاسم:()
                  
                    </p>
                    
                    
                   <div  id="print" className="icon col-7 mr-auto">
                   <i class="fas fa-print"></i> اطبع
                   </div>
                </div>

            </div>
        )
    }
}
export default Project;