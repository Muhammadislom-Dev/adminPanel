import React, { useState } from 'react';
import file from '../../assets/img/file.png'
import credit from '../../assets/img/creditcard.png'
import './Wrapper.css'
import top from '../../assets/img/top.png'
import tolov from '../../assets/img/banknote.png'

function Wrapper() {

  const [korzinkaModal, setKorzinkaModal] = useState(false);
  function openKorzinkaModal() {
    setKorzinkaModal(!korzinkaModal);
  }

  return (
    <div className="wrapper">
      {/* <div className="user-title">
        <label htmlFor="" className="user-label">
          <img src={file} alt="" className="user-logo" />
          <input type="text" placeholder="Izlash" className="user-input" />
        </label>
        <div className="user-titles">
          <button  className="user-button">
            <img src={credit} alt="" className="user-image" /> Buyurtma berish
          </button>
          <button className="user-buttons">
            <img src={tolov} alt="" className="user-image" /> To'lov
          </button>
          <button className="user-btn">
            <img src={top} alt="" className="user-image" /> Yangi Topshiriq
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Wrapper;
