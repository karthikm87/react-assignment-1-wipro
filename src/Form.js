import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playername: "",
      comments: "",
      role: "",
    };
  }
  handlePlayerNameChange = (event) => {
    this.setState({
      playername: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleRoleChange = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `Details of the submitted Players are : Player Name - ${this.state.playername} ,About the player : ${this.state.comments} ,Player Role : ${this.state.role}`
    );
    event.preventDefault();
  };

  render() {
    const { playername, comments, role } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="div1">
          <h3> Enter the player details</h3>
          <label> Player Name </label>
          <input
            type="text"
            value={playername}
            onChange={this.handlePlayerNameChange}
          ></input>
        </div>
        <div>
          <label>About player </label>
          <textarea
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label>Player Role </label>
          <select value={role} onChange={this.handleRoleChange}>
            <option value="Right Hand Batsman">Right Hand Batsman</option>
            <option value="Left Hand Batsman">Left Hand Batsman</option>
            <option value="Right Hand Bowler">Right Hand Bowler</option>
            <option value="Left Hand Batsman">Left Hand Batsman</option>
            <option value="All rounder">All rounder</option>
          </select>
        </div>
        <p>
          <button>Submit</button>
        </p>
      </form>
    );
  }
}

export default Form;
