import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import panda from "../src/assets/img/panda.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div className="App">
        <button
          id="animated-example"
          onClick={this.handleClick}
          className={
            this.state.isToggleOn
              ? "my-click-btn "
              : "my-click-btn custom-class animated"
          }
        >
          {this.state.isToggleOn ? (
            <span>
              Click me &nbsp; &nbsp;{" "}
              <span className="icons">
                <i class="fas fa-location-arrow" style={{ color: "#fff" }} />{" "}
              </span>
            </span>
          ) : (
            <span>
              Smile... &nbsp; &nbsp;
              <span className="icons">
                {" "}
                <i class="fas fa-smile-beam bounce" style={{ color: "#fff" }} />
              </span>{" "}
            </span>
          )}
        </button>

        <img src={panda} className="panda" alt="gif" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
