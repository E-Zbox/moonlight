import styled from "styled-components";

export default styled.button`
    border: 2px solid
        ${({
            color,
            transparentBorder,
            theme: {
                colors: { white01 },
            },
        }) => {
            if (transparentBorder) return "transparent";
            else if (color) return color;
            return white01;
        }};
    color: ${({
        color,
        theme: {
            colors: { white01 },
        },
    }) => (color ? color : white01)};
    width: 100%;
    font-size: 0.8125rem;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
    padding: calc(var(--ten-px) * 1.2) 0px;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
    transition: all 350ms ease-in;
    &:hover {
        border-color: ${({ hoverBorderColor }) => hoverBorderColor};
        color: ${({
            hoverColor,
            theme: {
                colors: { dark02 },
            },
        }) => (hoverColor ? hoverColor : dark02)};
        background-color: ${({
            hoverBgColor,
            theme: {
                colors: { white01 },
            },
        }) => (hoverBgColor ? hoverBgColor : white01)};
    }
`;
