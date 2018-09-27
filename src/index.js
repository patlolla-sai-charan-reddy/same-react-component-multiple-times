import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let chase = [];

class Text extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <p>{this.props.id}</p>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
      val: []
    };
  }
  renderApp() {
    this.setState({
      data: this.state.data + 1
    });

    chase.push(this.state.data);
    console.log(chase);

    this.setState({
      val: chase
    });
  }
  render() {
    return (
      <div>
        <p onClick={this.renderApp.bind(this)}>hello</p>
        <p>hey</p>
        <Text id={0} />
        {this.state.val.map(function(player, index) {
          return <Text index={index} id={player} />;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
