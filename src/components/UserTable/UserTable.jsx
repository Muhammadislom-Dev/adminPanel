import React from "react";
import { useEffect, useState } from "react";
import Avatar from "../../assets/img/avatar.png";
import menu from "../../assets/img/menu.png";
import './UserTable.css'
import file from '../../assets/img/file.png'
import credit from '../../assets/img/creditcard.png'

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user">
      <div className="container">
        <ul className="user-list">
            <li className="user-item">
                <a href="#" className="user-link">All</a>
            </li>
            <li className="user-item">
                <a href="#" className="user-link">Not seen</a>
            </li>
            <li className="user-item">
                <a href="#" className="user-link">Saved</a>
            </li>
            <li className="user-item">
                <a href="#" className="user-link">Blocked</a>
            </li>
        </ul>
        <table className="user-table">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th>Name and ID</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Activity (day)</th>
              <th></th>
            </tr>
          </thead>
          {users.length > 0 && (
            <tbody>
              {users.map((user, i) => (
                <tr className="tbody-tr" key={i}>
                  <th className="tbody-checkbox">
                    <input type="checkbox" />
                  </th>
                  <td>
                    <span className="users-span">
                      <img src={Avatar} alt="" className="users-avatar" />
                      <span>
                        <p>{user.name} </p>
                        <p>ID {user.id * 25060}</p>
                      </span>
                    </span>
                  </td>
                  <td>{user.email}</td>
                  <td>Man</td>
                  <td>{user.address.city}</td>
                  <td>{user.id * 10} min</td>
                  <td>
                    <button className="menu-btn">
                      <img src={menu} alt="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>        
      </div>
    </div>
  );
}

export default UserTable;
