import React from 'react';
import "./App.css";
import NewComponent from "./Components/NewComponent";

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "Red"
  };

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}> Welcome Joel</h1>
        <NewComponent/>
      </div>
    )
  }
}

export default App;
