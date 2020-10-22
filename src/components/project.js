import React, { useEffect, useState } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import Axios from "../axios";
import $ from "jquery";

function Project(props) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await Axios.get(`/orders/${props.match.params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      });
      setPost(data);
    };
    fetch();
  }, [props.match.params.id]);
  console.log(post);
  $("#print").click(function () {
    window.print();
  });
  var a = document.querySelector(".spinner-wrapper");
  setTimeout(() => {
    a.style.display = "none";
  }, 100);
  return (
    <div className="container preview">
      <div className="row">
        <p className="justify-content-start mr-5 mt-5 col-6">
          <img src={img} className="img-fluid" alt="logo" />
          محافظه الاسماعيليه
          <br />
          <span className="mr-5 pr-3">مكتب خدمه المستثمرين</span>
        </p>

        <hr className="col-lg-11 col-md-6  mt-0" />
        <p className="mx-auto text-style col-10">نموذج إقامه مشروع</p>

        <div className="mt-5 justify-content-start mr-5 mt-5 col-10">
          <p className="justify-content-start  mt-5">
            مقدمه لسيادتكم / {post ? post.nameOfOwner : ""}
          </p>
          {/*                     <p className="justify-content-start  mt-5">المساحة المستغلة </p>
           */}{" "}
          <p className="justify-content-start  mt-5">
            المقيم في / {post ? post.city : ""}
          </p>
          <p className="justify-content-start  mt-5">
            الجنسية / {post ? post.nationality : ""}
          </p>
          <p className="justify-content-start  mt-5">
            تليفون /{" "}
            {post ? (post.customer.phone ? post.customer.phone : "") : ""}
          </p>
          <p className="justify-content-start  mt-5">
            بريد الكترونى /{" "}
            {post ? (post.customer.email ? post.customer.email : "") : ""}
          </p>
          <p className="justify-content-start  mt-5">
            حيث ارغب في أقامه مشروع صناعي بالمنطقة الصناعية /
            {post ? post.industrialArea : ""}{" "}
          </p>
          <p className="justify-content-start  mt-5">
            وبيانات المشروع كالتالي:{" "}
          </p>
          <p className="justify-content-start  mt-5">
            اسم المشروع / {post ? post.nameOfProject : ""}
          </p>
          <p className="justify-content-start  mt-5">
            نوع النشاط / {post ? post.activity : ""}
          </p>
          <p className="justify-content-start  mt-5">
            المساحة المطلوبة / {post ? post.requiredArea : ""}
          </p>
          <p className="justify-content-start  mt-5">
            راس المال العامل {post ? post.workingCapital : ""} جنيه مصرى
          </p>
          <p className="justify-content-start  mt-5">
            التكلفة الاستثمارية {post ? post.cost : ""} جنيه مصرى
          </p>
          <p className="justify-content-start  mt-5">
            حجم العمالة / {post ? post.employment : ""}
          </p>
          <p className="justify-content-start  mt-5">
            {" "}
            الشكل القانوني / {post ? post.legalStatus : ""}
          </p>
          <p className="justify-content-start  mt-5">
            مده التنفيذ / {post ? post.duration : ""}
          </p>
          <p className="justify-content-start  mt-5">
            كميه الإنتاج السنوي المتوقع /{" "}
            {post ? post.expectedAnnualProductionAmount : ""}
          </p>
          <p className="justify-content-start  mt-5">
            نظام التسويق / {post ? post.marketingSystem : ""}
          </p>
          <p className="justify-content-start  mt-5">
            ومستعد لتقديم أي دراسات او مستندات او بيانات او رسومات تطلب منى{" "}
          </p>
        </div>
        <p className=" text-center  col-12 mt-3">وتفضلوا بقبول وأفر التحيه</p>

        <p className=" mr-auto  mt-5 col-6">
          مقدمة لسيادتكم
          <br />
          الاسم:{" "}
          {post ? (post.customer.username ? post.customer.username : "") : ""}
        </p>

        <div id="print" className="icon col-7 mr-auto">
          <i className="fas fa-print"></i> اطبع
        </div>
      </div>
    </div>
  );
}

export default Project;
