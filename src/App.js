import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
// components
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
// data
import { entriesItems, menuItems, workItems } from "./data";
// global styles
import GlobalStyles from "./components/Styles/Global.Styles";

const theme = {
    colors: {
        white01: "#fff",
        white02: "#fafafa22",
        white03: "#aaa",
        dark01: "#0000007f",
        dark02: "#232323",
        dark03: "#333",
        blue01: "#337ab7",
        shadow01: "#23232345",
        shadow02: "#000000dc",
    },
    height: {
        hdefault: "80%",
        hmin: "520px",
    },
    width: {
        wdefault: `${window.innerWidth}px`,
    },
};

const App = () => {
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const getClickedMenu = (title) => {
        return title;
    };

    const handleScroll = (e) => {
        let {
            target: { scrollLeft },
        } = e;
        setScrollLeftPos(scrollLeft);
    };
    return (
        /**
         * in index.html or Global.Styles include Open Sans google font cdn
         */
        <>
            <ThemeProvider theme={theme}>
                <Navbar
                    scrollLeftPos={scrollLeftPos}
                    handleClick={getClickedMenu}
                    menuItems={menuItems}
                />
                <Pages
                    data={{ entriesItems, workItems }}
                    handleScroll={handleScroll}
                />
                <GlobalStyles />
            </ThemeProvider>
        </>
    );
};

export default App;
