import React, { Component } from 'react';
import AppContext from './AppContext';
import { defaultUser, logOut } from './AppContext';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../HOC/WithLogging';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const styles = StyleSheet.create({
 body: {
     fontFamily: "'Times New Roman', Times, serif",
     textAlign: 'center',
     height: 'auto',
 },
 appBody: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'start',
     height: 'auto',
     borderBottom: '3px solid rgb(225, 29, 63)',
 },
 top: {
     width: '100%',
     height: '200px',
     display: 'flex',
     position: 'relative',
     flexDirection: 'row-reverse',
     justifyContent: 'space-between',
     borderBottom: '3px solid rgb(225, 29, 63)',
 },
});

export function mapStateToProps(state) {
  return { isLoggedIn: state.get('isUserLoggedIn')}
}

export const LoginWithLogging = WithLogging(Login)

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const value = {user: defaultUser, logOut};
    value.logOut = value.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      value,
      listNotifications: [
        { type: "default", html: "", value: "New course available" },
        { type: "urgent", html: "", value: "New resume available" },
        { type: "", html: "<strong class='strong'>Urgent requirement</strong>", value: " - complete by EOD" }
      ]
    }
   
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleLogOutKeyEvent = this.handleLogOutKeyEvent(this);
    this.markNotificationAsRead = this.markNotificationAsRead(this);

    this.logIn = this.logIn.bind(this);
  }

  logIn(email, password) {
    this.setState(state => ({
      value: {
        ...(state.value),
        user: {
          email,
          password,
          isLoggedIn: true
        }
      }
    }));
  } 

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleLogOutKeyEvent(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.value.logOut();
    }
  }

  componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    console.log(event.key)
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
      console.log('Preciono control + h')
      alert('Logging you out')
      this.props.logOut()
    }
 }

  markNotificationAsRead(id) {
  this.setState(state => ({
    listNotifications: state.listNotifications.filter(notification => notification.id !== id),
    }));
  }

 render() {
    const listCourses = [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit: 20},
      {id: 3, name: "React", credit: 40},
    ];

    const { displayDrawer } = this.state;

    return (
      <AppContext.Provider value={this.state.value} >
        <div className={css(styles.body)}>
          <div className={css(styles.top)}>
            <Notifications
              data-testid="notifications"
              displayDrawer={displayDrawer}
              listNotifications={this.state.listNotifications}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header data-testid="header" />
          </div>

          <div className={css(styles.appBody)}>
            {!this.state.value.user.isLoggedIn ?
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login data-testid="login" logIn={this.logIn} />
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </BodySection>
          </div>
          <Footer data-testind="footer" />
        </div>
      </AppContext.Provider>
    );
 }
}
