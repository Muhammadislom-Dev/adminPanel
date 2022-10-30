import React, {useState} from "react";
import "./Product.css";
import ProductTable from "./ProductTable/ProductTable";

export default function Product() {

  return (
    <div className="product">
      <div className="container">
        <div className="product-page">
            <ProductTable />
        </div>
      </div>
    </div>
  );
}
