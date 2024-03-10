import { getFooterCopy, getFullYear } from '../utils/utils';
import  AppContext from '../App/AppContext'
import React, { useContext } from "react"
import './Footer.css'

export default function Footer() {

    const { user } = useContext(AppContext)

    const isLoggedIn = user.isLoggedIn

    return (
            <footer>
                <p className="App-footer">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                {isLoggedIn && <p>Contact us</p>}
            </footer>
    )
}