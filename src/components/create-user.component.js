import React, { Component } from "react";
import axios from 'axios';  
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangephone = this.onChangephone.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangecoins = this.onChangecoins.bind(this);
    this.onChangerefercode = this.onChangerefercode.bind(this);
    this.onChangereferredby = this.onChangereferredby.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      phone: "",
      password: "",
      coins: "",
      refercode: "",
      referredby: "",
      name: "",
    };
  }

  onChangephone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangecoins(e) {
    this.setState({
      coins: e.target.value,
    });
  }
  onChangerefercode(e) {
    this.setState({
      refercode: e.target.value,
    });
  }
  onChangereferredby(e) {
    this.setState({
      referredby: e.target.value,
    });
  }
  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("HI");
    const user = {
      phone: this.state.phone,
      password: this.state.password,
      coins: this.state.coins,
      refercode: this.state.refercode,
      referredby: this.state.referredby,
      name: this.state.name,
    };
    console.log(user);
    this.setState({
      phone: "",
      password: "",
      coins: "",
      refercode: "",
      referredby: "",
      name: "",
    });

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error quiz:" + err));
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Phone </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangephone}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
            />
          </div>
          <div className="form-group">
            <label>Coins</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.coins}
              onChange={this.onChangecoins}
            />
          </div>
          <div className="form-group">
            <label>refercode</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.refercode}
              onChange={this.onChangerefercode}
            />
          </div>
          <div className="form-group">
            <label>Referred by</label>
            <input
              type="text"
              className="form-control"
              value={this.state.referredby}
              onChange={this.onChangereferredby}
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
