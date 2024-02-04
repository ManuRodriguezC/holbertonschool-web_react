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
   

export default function Login() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [enableSubmit, setEnableSubmit] = useState(false);

   function handleLoginSubmit() {
      setIsLoggedIn(true);
   }

   const handleChangeEmail = (event) => {
      setEmail(event.target.value);
      if (event.target.value && password) {
      setEnableSubmit(true);
      } else {
      setEnableSubmit(false);
      }
   };

   const handleChangePassword = (event) => {
      setPassword(event.target.value);
      if (event.target.value && email) {
      setEnableSubmit(true);
      } else {
      setEnableSubmit(false);
      }
   };

   return (
      <div className={css(styles.login)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <div className={css(styles.div)}>
         <form>
            <label className={css(styles.label)} htmlFor="email">Email:</label>
            <input type="text" id='email' name="email" value={email} onChange={handleChangeEmail} className={css(styles.inputButton)} />

            <label htmlFor="password">Password:</label>
            <input type="password" id='password' name="password" value={password} onChange={handleChangePassword} className={css(styles.inputButton)} />

            <input type="submit" value="OK" onClick={handleLoginSubmit} disabled={!enableSubmit} className={css(styles.inputButton)} />
         </form>
      </div>
      </div>
   );       
}
