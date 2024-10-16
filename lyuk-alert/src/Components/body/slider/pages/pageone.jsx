import React from "react";
import SvgSelector from "../../../SvgSelector"
import "./pages.sccs/pageone.scss";

const PageOne = () => {
  return (
    <div className="banner">
      <h1 className="banner_title container">Оcторожно ЛЮК -</h1>
      <p className="banner_text container">
        проект, который помогает предотвращать опасности и спасать жизни,
        обнаруживая и закрывая открытые люки.
      </p>
      <svg
      className="lyuk"
        width="232"
        height="141"
        viewBox="0 0 232 141"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M179.5 140.439C278.635 140.439 359 109.008 359 70.2353C359 31.4627 278.635 0.03125 179.5 0.03125C80.3649 0.03125 0 31.4627 0 70.2353C0 109.008 80.3649 140.439 179.5 140.439Z"
          fill="#2A201C"
        />
        <path
          d="M179.5 21.7762C269.171 21.7762 343.497 47.4981 356.859 81.1078C358.262 77.6359 358.988 73.9521 359 70.2353C359 31.4617 278.636 0.03125 179.5 0.03125C80.3639 0.03125 0 31.4617 0 70.2353C0.0122124 73.9521 0.737784 77.6359 2.1415 81.1078C15.5058 47.4981 89.8211 21.7762 179.5 21.7762Z"
          fill="#FCFBFA"
        />
      </svg>
      <button className="banner_btn">
        {" "}
        Подробнее о проекте 
        <SvgSelector name="send"/>
        {" "}
      </button>
    </div>
  );
};
export default PageOne;
