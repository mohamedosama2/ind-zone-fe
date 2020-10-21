import React, {
  Component
} from "react";
import "./styles/paper.css";
import img from "../2.png";
import "../fontawesome-free-5.9.0-web/css/all.css";
import "../WOW-master/css/libs/animate.css";
import {NavLink} from 'react-router-dom'
import {
  WOW
} from "wowjs";
import $ from 'jquery';

const wow = new WOW();
wow.init();
class Paper extends Component {
  render() {
    $(document).ready(function () {
      $("#click").click(function () {
        $("#search").addClass("animated fadeInLeft").show();

      });
      $(".finish").hide();
      $("#done").click(function (e) {
        e.preventDefault();
        $(".finish").show();
        $(".hide").hide();

      });
      $(".navbar-collapse ").css({
        "background-color": "#636363",

      })

      var homeNAV = $("#home-nav");
      var offset = homeNAV.offset();
      $("#nav").css({
        "background-color": "#636363",

      })
      $(window).on("scroll", function () {

        if ($(window).scrollTop() > offset.top) {
          $("#nav").css({
            "background-color": "#000000",
          })
          $(".navbar-collapse ").css({
            "background-color": "#000000",

          })
        } else {
          $("#nav").css({
            "background-color": "#636363",

          })
          $(".navbar-collapse").css({
            "background-color": "#636363",

          })
        }
      })
      var a = document.querySelector(".spinner-wrapper");
      setTimeout(() => {
        a.style.display = "none";
      }, 100);

    });
    return (
      <div className="">
     <div id="home-nav">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top bg " id="nav">
            <a className="navbar-brand" href="true">
              <img src={img} className="img-fliud" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
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
                  <input className="form-control ml-2" type="search" placeholder="بحث عن" aria-label="Search"
                    id="search" />
                  <span className="bg-light   rounded-circle text-dark" id="click">
                    <i className="fas fa-search"></i>
                  </span>

                  {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
           {/*      <a href="true" className="text-white mr-3 mt-1">تسجيل الخروج</a> */}
                <NavLink to="/logout" className="text-white mr-3 mt-1">تسجيل الخروج</NavLink>


              </span>
            </div>
          </nav>
        </div>
          <section className="paper">
          <h2 class="text-center">
            بيان بالمستندات المطلوبة من المستثمر للتسجيل
          </h2>
          <div className="d-flex justify-content-start">
          <ol className="p-5 ">
              <li className="mb-1">
                سند الملكية / حيازة المتنازل (قرار التخصيص- محضر استلام)
              </li>
              <li className="mb-1">
                أن يكون المصنع يعمل بالفعل عند طلب التسجيل وغير متوقف وأن يكون
                قد مر على بدء الإنتاج او مزاولة النشاط سنه على الأقل
              </li>

              <li className="mb-1">تقديم رخصة البناء او ما يقوم مقامها</li>
              <li className="mb-1">تقديم ما يفيد عدم وجود مخالفات بناء</li>
              <li className="mb-1">تقديم رخصه التشغيل ساريه </li>
              <li className="mb-1">السجل التجاري ساري </li>
              <li className="mb-1">السجل الصناعي ساري</li>
              <li className="mb-1">البطاقة الضريبية بها اخر إقرار ضريبي </li>

              <li className="mb-1">ما يفيد الالتزام بالاشتراطات البيئية وعدم وجود مخالفات</li>
              <li className="mb-1"> صوره البطاقة </li>
              <li className="mb-1"> ما يفيد سداد جميع مستحقات المنطقة الصناعية </li>
              <li className="mb-1"> ما يفيد رسميه توصيل المرافق</li>
              <li className="mb-1"> ما يفيد التسجيل في ضريبة القيمة المضافة </li>
              <li className="mb-1"> إقرار بعدم وجود أي نزاع قضائي على الأرض</li>
              <li className="mb-1"> رسم كروكي للموقع وما عليه من مباني معتمد من مهندس نقابي معتمد لدى نقابة المهندسين
              </li>
              <li className="mb-1"> اخطار توقف للأنشطة المتوقفة من جهات الاختصاص موضحا به سبب التوقف</li>
              <li className="mb-1"> أي مستند تطلبه لجنه اداره المنطقة الصناعية بخلاف ذلك طبقا للقوانين واللوائح المعمول
                بها لدى المنطقة </li>
            </ol>
            
            </div>
            <div className="d-flex justify-content-start">
            <ol className="pt-5 px-5 col-12">
              <span>ملاحظات:</span>
              <li className="mb-1 mt-2">لا يجوز على الأرض الفضاء ويتم احالتها لجهة الاختصاص لاتخاذ اللازم بشأنها </li>
              <li className="mb-1">لا يجوز التعامل على الأراضي المقام عليها مباني بدون ترخيص او مباني مخالفه ويتم احالتها
                الى جهات الاختصاص لاتخاذ اللازم بشأنها </li>
              <li className="mb-1">لا يجوز التعامل على الأنشطة المتوقفة ويتم احالتها الى جهات الاختصاص لاتخاذ اللازم
                بشأنها </li>
              <li className="mb-1">لا يجوز التعامل على الأنشطة المخالفة للغرض من التخصيص ويتم احالتها الى جهات الاختصاص
                لاتخاذ اللازم بشأنها</li>
              <li className="mb-1">يتم الالتزام بكافة الضوابط الفنية والمالية والقانونية والإرادية المعمول بها لدى المنطقة
                الصناعية </li>
  
            </ol>
  
              </div>
          </section>
    </div>
    )
  }
}

export default Paper;

             