import logo from './logo_holbertong.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import { Notification } from './Notifications';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <input type="text" id='email'></input>
        <label for="email">Email</label>
        <input type="password" id='password'></input>
        <label for="password">Password</label>
        <button>OK</button>
        <div className='root-notifications'>
          <Notification />
        </div>
      </body>
      
      <footer>
        <p className="App-footer">Copyright 2020 - holberton School</p>
        <p>{getFullYear()}</p>
        <p>{getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
