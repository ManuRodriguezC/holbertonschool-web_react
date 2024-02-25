import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
    header: {
       paddingTop: '10px',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'start',
       color: 'rgb(225, 29, 63)',
       fontSize: '18px',
    },
    logo: {
       height: '20vmin',
       pointerEvents: 'none',
    },
    welcome: {
        margin: '10px 20px'
    }

});

class Header extends React.Component {
    render () {
        return (
            <header className={css(styles.header)}>
                <img src="holberton-logo.jpg" className={css(styles.logo)} alt="logo" />
                <h1>School dashboard</h1>
                {this.context.user.isLoggedIn && (
                    <p className={css(styles.welcome)} id="logoutSection">
                        Welcome {this.context.user.email} ({<a href="#" onClick={this.context.logOut}>logout</a>})
                    </p>
            )}
        </header>
        );
    }
}
Header.contextType = AppContext;
export default Header;
