import React from "react";
import "./styles.css";
function UserLogedIn() {
  return <div>User is Logned</div>;
}
function UserLogedOut() {
  return <div>User is loged Out</div>;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: true
    };
  }
  InOut = () => {
    this.setState((state) => ({
      isLogedIn: !state.isLogedIn
    }));
  };
  render() {
    return (
      <div className="App">
        {this.state.isLogedIn ? <UserLogedIn /> : <UserLogedOut />}
        <button onClick={this.InOut}>
          {this.state.isLogedIn ? "LogedIn" : "LogedOut"}
        </button>
        <h1 style={{ color: "purple" }}>
          Conditional Rendering : Based on conditions the component is render on
          the UI
        </h1>
        <h2 style={{ color: "green" }}>Using ternary Operator</h2>
      </div>
    );
  }
}
