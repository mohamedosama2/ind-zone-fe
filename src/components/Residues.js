import React, { useEffect, useState } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import Axios from "../axios";
import $ from "jquery";

function Residues(props) {
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
          محافظه الاسماعيليه
          <br />
          لجنة خدمات المنطقه الصناعية الأولى والتانية
        </p>
        <div className="justify-content-end  mr-auto mt-4 col-3">
          <img src={img} className="img-fluid" alt="logo" />
        </div>

        <p className="justify-content-start mr-5 mt-5 col-6">بالاسماعيليه</p>
        <p className="justify-content-end mr-auto  mt-5 col-4">نموذج مخلفات</p>
        <hr className="col-lg-11 col-md-6  mt-0" />
        <p className="mx-auto text-style col-10">
          السيد مدير لجنة خدمات المنطقة الصناعية
        </p>
        <p className="mx-auto text-style col-8">تحيه طيبه وبعد</p>
        <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
          برجاء التكرم من سيادتكم بالموافقة على رفع المخلفات من الشركة بواقع عدد
          {post ? post.numberOfRemains : ""} نقله بمعرفة معدات ومهمات وأفراد
          سيادتكم ونحن على أتم الاستعداد لسداد الرسوم والبالغة
          {post ? post.fees : ""} فقط لا غير
        </p>
        <p className=" text-center  col-12 mt-3">
          وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير
        </p>

        <p className=" mr-auto  mt-5 col-6">
          مقدمة لسيادتكم
          {/*           <br />
          شركة :() */}
          <br />
          الاسم: {post ? post.customer.username : ""}
          {/*           <br />
          رقم البطاقة :() */}
          <br />
          البريد الالكترونى : {post ? post.customer.email : ""}
          <br />
          واتساب :{post ? post.customer.phone : ""}
        </p>

        <div id="print" className="icon col-7 mr-auto">
          <i className="fas fa-print"></i> اطبع
        </div>
      </div>
    </div>
  );
}

export default Residues;
