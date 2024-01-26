import React from 'react';
import './App.css';
import { Notification }  from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types'

export default function App({ isLoggedIn = true, logOut = () => {} }) {

  document.addEventListener('keydown', function(event) {
    console.log(event.key)
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
      console.log('Preciono control + h')
      alert('Logging you out')
      logOut()
    }
  })

  const listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40},
  ]

  const listNotifications = [
    { type: "default", html: "", value: "New course available" },
    { type: "urgent", html: "", value: "New resume available" },
    { type: "", html: "<strong class='strong'>Urgent requirement</strong>", value: " - complete by EOD" }
];
  
  return (
    <div className="App">
      <div className='top'>
        <Notification data-testid="nootifications" displayDrawer={isLoggedIn} listNotifications={listNotifications}/>
        <Header data-testid="header" />
      </div>
      <div className="App-body">
        {!isLoggedIn ? <Login data-testid="login" /> : <CourseList listCourses={listCourses}/>}
      </div>
      <Footer data-testind="footer" />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

