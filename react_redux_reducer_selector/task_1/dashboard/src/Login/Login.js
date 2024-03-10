import React, { useState } from "react"
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    login: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'start',
    },
    p: {
       margin: '40px 0px 20px 40px',
       fontSize: '16px',
       fontWeight: '600',
    },
    div: {
      display: 'flex',
      top: '10px',
      paddingLeft: '40px',
      fontWeight: '600',
      '@media (max-width: 900px)': {
        flexDirection: 'column',
      },
      'label': {
        '@media (max-width: 900px)': {
           border: '0px'
        }
      }
   },
    inputButton: {
       margin: '0px 10px',
       borderRadius: '5px',
       border: '2px solid rgb(223, 222, 222)',
       backgroundColor: 'white',
       '@media (max-width: 900px)': {
         width: '40px'
       }
    },
   });
   

class Login extends React.Component {

   constructor(props) {
      super(props);
      this.state = { email: '', password: '', enableSubmit: false };
      this.shouldEnableSubmit = this.shouldEnableSubmit.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
   }

   shouldEnableSubmit(email, password) {
      return (
        typeof email === 'string' && email.length > 0
        && typeof password === 'string' && password.length > 0
      );
    }

   handleChangeEmail(event) {
      const email = event.target.value;
      this.setState(state => ({
         email,
         enableSubmit: this.shouldEnableSubmit(email, state.password)
      }))
   };

   handleChangePassword(event) {
      const password = event.target.value;
      this.setState(state => ({
        password,
        enableSubmit: this.shouldEnableSubmit(state.email, password),
      }));
   }

   handleLoginSubmit(event) {
      event.preventDefault();
      this.props.logIn(this.state.email, this.state.password);
   }

   render() {  
      return (
         <div className={css(styles.login)}>
         <p className={css(styles.p)}>Login to access the full dashboard</p>
         <div className={css(styles.div)}>
            <form onSubmit={this.handleLoginSubmit}>
               <label className={css(styles.label)} htmlFor="email">Email:</label>
               <input type="email" id='email' name="email" value={this.state.email} onChange={this.handleChangeEmail} className={css(styles.inputButton)} />

               <label htmlFor="password">Password:</label>
               <input type="password" id='password' name="password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.inputButton)} />

               <input type="submit" value="OK" disabled={!this.state.enableSubmit} className={css(styles.inputButton)} />
            </form>
         </div>
      </div>
      );       
   }
}

export default Login;