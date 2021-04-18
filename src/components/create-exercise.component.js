import React, { Component } from "react";
import axios from "axios";

export default class CreateExercises extends Component {
  constructor(props) {
    super(props);
    this.onChangeid = this.onChangeid.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onChangeOptionA = this.onChangeOptionA.bind(this);
    this.onChangeOptionB = this.onChangeOptionB.bind(this);
    this.onChangeOptionC = this.onChangeOptionC.bind(this);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: 0,
      Question: "",
      OptionA: "",
      OptionB: "",  
      OptionC: "",
      Answer: 0,
    };
  }
  onChangeid(e) {
    this.setState({
      id: e.target.value,
    });
  }
  onChangeQuestion(e) {
    this.setState({
      Question: e.target.value,
    });
  }
  onChangeOptionA(e) {
    this.setState({
      OptionA: e.target.value,
    });
  }
  onChangeOptionB(e) {
    this.setState({
      OptionB: e.target.value,
    });
  }
  onChangeOptionC(e) {
    this.setState({
      OptionC: e.target.value,
    });
  }0
  onChangeAnswer(e) {
    this.setState({
      Answer: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const quiz = {
      id: Number(this.state.id),
      Question: this.state.Question,
      OptionA: this.state.OptionA,
      OptionB: this.state.OptionB,
      OptionC: this.state.OptionC,
      Answer: Number(this.state.Answer),
    };
    console.log(quiz);
    axios
      .post("http://localhost:5000/quiz/add", quiz)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error quiz:" + err));

    // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Question no. </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeid}
            />
          </div>
          <div className="form-group">
            <label>Question </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.Question}
              onChange={this.onChangeQuestion}
            />
          </div>
          <div className="form-group">
            <label>Option A</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.OptionA}
              onChange={this.onChangeOptionA}
            />
          </div>
          <div className="form-group">
            <label>Option B</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.OptionB}
              onChange={this.onChangeOptionB}
            />
          </div>
          <div className="form-group">
            <label>Option C</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.OptionC}
              onChange={this.onChangeOptionC}
            />
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input
              type="text"
              className="form-control"
              value={this.state.Answer}
              onChange={this.onChangeAnswer}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Question"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
