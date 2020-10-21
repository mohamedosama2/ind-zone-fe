import React, { useEffect, useState, Component } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
// import { NavLink } from "react-router-dom";
// import Axios from "../axios";
import $ from "jquery";

class Preview extends Component {
  render() {
    $("#print").click(function () {
      window.print();
    });
    return (
      <div className="container preview">
        <div className="row">
          <p className="justify-content-start mr-5 mt-5 col-6">
            محافظه الاسماعيليه
            <br />
            لجنة خدمات المنطقه الصناعية الأولى والتانية
          </p>
          <div className="justify-content-end  mr-auto mt-4 col-3">
            <img src={img} className="img-fluid" alt="logo" />
          </div>

          <p className="justify-content-start mr-5 mt-5 col-6">بالاسماعيليه</p>
          <p className="justify-content-end mr-auto  mt-5 col-4">
            نموذج معاينه
          </p>
          <hr className="col-lg-11 col-md-6  mt-0" />
          <p className="mx-auto text-style col-10">
            السيد مدير لجنة خدمات المنطقة الصناعية
          </p>
          <p className="mx-auto text-style col-8">تحيه طيبه وبعد</p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
            برجاء التكرم من سيادتكم بالموافقة على عمل المعاينة على الطبيعة لشركة
            ()
          </p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-lg-5 col-md-12">
            باسم السيد / (){" "}
          </p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-lg-5 col-md-12">
            بنشاط /()
          </p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
            بمعرفه سيادتكم وذلك للبدء فى الإجراءات القانونية اللازمة
            <br />
            ونحن على اتم الاستعداد لسداد الرسوم المقررة
          </p>
          <p className=" mr-auto  mt-5 col-4">
            مقدمة لسيادتكم
            <br />
            شركة :()
            <br />
            الاسم:()
            <br />
            رقم البطاقة :()
            <br />
            البريد الالكترونى :()
            <br />
            واتساب :()
          </p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
            رأى الحسابات :
          </p>
          <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
            رأى المكتب الفنى :
          </p>
          <p className="   mx-auto col-6">قرار السيد مدير اللجنة :</p>
          <div id="print" className="icon col-7 mr-auto">
            <i class="fas fa-print"></i> اطبع
          </div>
        </div>
      </div>
    );
  }
}
export default Preview;
