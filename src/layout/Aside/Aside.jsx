import React from "react";
import "./Aside.css";
import person from "../../assets/img/person.png";
import Home from "../../SVG/Home";
import { Link } from "react-router-dom";
import { Exam } from "../../SVG/Exam";
import { Order } from "../../SVG/Order";
import { New } from "../../SVG/New";
import Analitika from "../../SVG/Analitika";

const Aside = () => {


  const handleAddClass = (evt) => {
    const links = document.querySelectorAll(".aside__link-active");
    links.forEach((link) => {
      link.classList.remove("aside__link-active");
    });
    evt.currentTarget.classList.add("aside__link-active");
  };

  return (
    <div className="aside">
      <div className="container">
        <div className="aside-title">
          <img src={person} alt="" className="aside-img" />
          <h3 className="aside-name">
            Lohn Diablo <span>SuperUser</span>{" "}
          </h3>
        </div>
        <ul className="aside-list">
          <li className="aside-item">
            <Link onClick={handleAddClass} to="/" className="aside-link">
              <Home /> <p>Bosh sahifa</p>
            </Link>
          </li>
          <li className="aside-item">
            <Link onClick={handleAddClass} to="/product" className="aside-link">
              <Exam /> <p>Topshiriqlar</p>
            </Link>
          </li>
          <li className="aside-item">
            <Link onClick={handleAddClass} to="/" className="aside-link">
              <Order /> <p>Buyurtma</p>
            </Link>
          </li>
          <li className="aside-item">
            <Link onClick={handleAddClass} to="/analitica" className="aside-link">
              <Analitika /> <p>Analitika</p>
            </Link>
          </li>
          <li className="aside-item">
            <Link onClick={handleAddClass} to="/" className="aside-link">
              <New /> <p>Yangiliklar</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
