import React from 'react';
import './App.css';
import { Notification }  from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Notification data-testid="nootifications" />
      <Header data-testid="header" />
      <div className="App-body">
        <Login data-testid="login" />
      </div>
      <Footer data-testind="footer" />
    </div>
  );
}

export default App;
