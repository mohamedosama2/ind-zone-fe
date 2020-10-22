import React, { useEffect, useState } from "react";
import "./styles/orders.css";
import img from "../3.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import Axios from "../axios";
import $ from "jquery";

function Preview(props) {
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
        <p className="justify-content-end mr-auto  mt-5 col-4">نموذج معاينه</p>
        <hr className="col-lg-11 col-md-6  mt-0" />
        <p className="mx-auto text-style col-10">
          السيد مدير لجنة خدمات المنطقة الصناعية
        </p>
        <p className="mx-auto text-style col-8">تحيه طيبه وبعد</p>
        <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
          برجاء التكرم من سيادتكم بالموافقة على عمل المعاينة على الطبيعة لشركة /{" "}
          {post ? post.company : ""}
        </p>
        <p className="mt-5 justify-content-start mr-5 mt-5 col-lg-5 col-md-12">
          باسم السيد / {post ? post.nameOfOwner : ""}{" "}
        </p>
        <p className="mt-5 justify-content-start mr-5 mt-5 col-lg-5 col-md-12">
          بنشاط / {post ? post.activity : ""}
        </p>
        <p className="mt-5 justify-content-start mr-5 mt-5 col-10">
          بمعرفه سيادتكم وذلك للبدء فى الإجراءات القانونية اللازمة
          <br />
          ونحن على اتم الاستعداد لسداد الرسوم المقررة
        </p>
        <p className=" mr-auto  mt-5 col-4">
          مقدمة لسيادتكم
          <br />
          شركة :{post ? post.company : ""}
          <br />
          الاسم:{post ? post.nameOfOwner : ""}

          <br />
          البريد الالكترونى :
          {post ? (post.customer.email ? post.customer.email : "") : ""}
          <br />
          واتساب :{post ? (post.customer.phone ? post.customer.phone : "") : ""}
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

export default Preview;
