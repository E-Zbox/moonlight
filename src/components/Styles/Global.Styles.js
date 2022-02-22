import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px; padding: 0px;
        font-family: "Open Sans", sans-serif;
    }
    html {
        --three-px: 3px;
        --seven-px: 7px;
        --ten-px: 10px;
    }
    #root {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        a {
            color: inherit;
            text-decoration: none;
        }
    }
`;
