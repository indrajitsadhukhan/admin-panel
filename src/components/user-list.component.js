import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.users._id}</td>
    <td>{props.users.phone}</td>
    <td>{props.users.password}</td>
    <td>{props.users.coins}</td>
    <td>{props.users.refercode}</td>
    <td>{props.users.referredby}</td>
    <td>{props.users.name}</td>
  </tr>
);
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  UserList() {
    return this.state.users.map((curruser) => {
      return <User users={curruser} key={curruser._id} />;
    });
  }
  render() {
    return (
      <div>
        <h3>List of Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>id</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Coins</th>
              <th>Refercode</th>
              <th>Referred By</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{this.UserList()}</tbody>
        </table>
      </div>
    );
  }
}
