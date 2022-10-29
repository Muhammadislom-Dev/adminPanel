import React, {useState} from "react";
import "./Product.css";


export default function Product() {

  return (
    <div className="product">
      <div className="container">
        <div className="product-page">
          <table className="product-table">
            <thead>
              <tr className="product-thead">
                <th className="product-name">Mahsulot nomlari</th>
                <th className="product-name">Toifalar</th>
                <th className="product-name">Narxi</th>
                <th className="product-name">Yuklama</th>
                <th className="product-name">Razmeri</th>
                <th className="product-name">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="product-tr">
                <th className="product-names">Lux Soft Memory</th>
                <th className="product-names">Model C</th>
                <th className="product-names">1 600 000 so’m</th>
                <th className="product-names">150 kg</th>
                <th className="product-names">200 x 134 x 40</th>
                <th className="product-names">false</th>
              </tr>
              <tr className="product-tr">
                <th className="product-names">Lux Soft Memory</th>
                <th className="product-names">Model C</th>
                <th className="product-names">1 600 000 so’m</th>
                <th className="product-names">150 kg</th>
                <th className="product-names">200 x 134 x 40</th>
                <th className="product-names">false</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
