/*import logo from './logo.svg';*/
import './App.css';
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import { ExportTestComponent, ExportTestComponentJoel } from "./Components/ExportTestComponent";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <div>
      <h1>Welcome Joel! Start react learning now</h1>
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <ExportTestComponent />
      <ExportTestComponentJoel />
      <Counter/>
      <ParentComponent/>
      <Click/>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
