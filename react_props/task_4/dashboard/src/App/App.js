import React from 'react';
import './App.css';
import { Notification }  from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types'

function App({ isLoggedIn = true }) {
  return (
    <div className="App">
      <div className='top'>
        <Notification data-testid="nootifications" displayDrawer={isLoggedIn} />
        <Header data-testid="header" />
      </div>
      <div className="App-body">
        {!isLoggedIn ? <Login data-testid="login" /> : <CourseList />}
      </div>
      <Footer data-testind="footer" />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
