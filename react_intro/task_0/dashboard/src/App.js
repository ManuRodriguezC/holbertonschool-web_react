import logo from './logo_holbertong.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      
      <footer>
        <p className="App-footer">Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
