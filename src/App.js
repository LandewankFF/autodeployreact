import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-2xl text-blue-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Auto Deployment with Concept CI/CD
        </a>
        <h1 className="text-3xl font-bold underline text-orange-500">Hello Tailwind!</h1>
      </header>
    </div>
  );
}

export default App;
