import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles, darkTheme, lightTheme } from './theme'

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [dark, setDark] = useState(true)
    const themeToggle = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <div>
            <ThemeProvider theme={theme==="light" ? darkTheme : lightTheme}>
                <GlobalStyles/>
                <button className="cart-button" onClick={()=> [themeToggle(), setDark(!dark)]}>{dark ? "light" : "dark"}</button>
            </ThemeProvider>
        </div>
    );
};

export default Header;