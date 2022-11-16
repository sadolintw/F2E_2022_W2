import logo from './logo.svg';
import './App.css';
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <div className="App">
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
        <h3>上傳文件</h3>
        <UploadFile></UploadFile>
      </header>
    </div>
  );
}

export default App;
