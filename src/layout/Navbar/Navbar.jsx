import React from 'react'
import './Navbar.css'
import message from '../../assets/img/message.png'
import setting from '../../assets/img/setting.png'
import notif from '../../assets/img/notif.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="navbar-title">
                <h1 className="navbar-name">iTime</h1>
                <p className="navbar-subname"
                style={{marginLeft:"15px", marginTop:"5px"}}
                >1 - filial</p>
            </div>
            <div className="navbar-title">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <img src={message} alt="" className="navbar-img" />
                        <p className="navbar-subname">Fikr-mulohaza</p>
                    </li>
                    <li className="navbar-item">
                        <img src={setting} alt="" className="navbar-img" />
                        <p className="navbar-subname">Sozlamalar</p>
                    </li>
                    <li className="navbar-item">
                        <img src={notif} alt="" className="navbar-img" />
                    </li>
                    <li className="navbar-item">
                        <p className="navbar-subname">IT-Time</p>
                    </li>
                    <li className="navbar-item">
                        <p className="navbar-subname">UZB</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar