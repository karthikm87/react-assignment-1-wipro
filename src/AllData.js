import React, { Component } from "react";
import userData from "./data.json";
import "./App.css";

var userList = userData.users;

class AllData extends Component {
  render() {
    return (
      <ul>
        {userList.map((a) => {
          return (
            <div>
              <div>
                <p>
                  <div>{a.id}</div>
                </p>
                <div>{a.first_name}</div>
                <div>{a.last_name}</div>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default AllData;
