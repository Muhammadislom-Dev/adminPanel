import React from "react";
import "./Category.css";
import CategoryTable from "./CategoryTable/CategoryTable";
import file from "../../assets/img/file.png";
import credit from "../../assets/img/creditcard.png";
import top from "../../assets/img/top.png";
import tolov from "../../assets/img/banknote.png";

function Category() {
  return (
    <div className="category">
      <div className="container">
        <div className="user-title">
          <label htmlFor="" className="user-label">
            <img src={file} alt="" className="user-logo" />
            <input type="text" placeholder="Izlash" className="user-input" />
          </label>
          <div className="user-titles">
            <button className="user-button">
              <img src={credit} alt="" className="user-image" /> Buyurtma berish
            </button>
            <button className="user-buttons">
              <img src={tolov} alt="" className="user-image" /> To'lov
            </button>
            <button className="user-btn">
              <img src={top} alt="" className="user-image" /> Yangi Topshiriq
            </button>
          </div>
        </div>
        <div className="category-page">
          <CategoryTable />
        </div>
      </div>
    </div>
  );
}

export default Category;
