import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 50%;
    left: 0;
    width: 20%;
    min-width: 270px;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    z-index: 2;
    transform: translateY(-50%);
    height: ${({
        theme: {
            height: { hdefault },
        },
    }) => hdefault};
    min-height: ${({
        theme: {
            height: { hmin },
        },
    }) => hmin};
    background-color: ${({
        theme: {
            colors: { dark01 },
        },
    }) => dark01};
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: calc(var(--ten-px) * 3.4);
`;

export const Drawer = styled.div`
    // this acts as a drawer for the nav in smaller screen
    width: 100%;
    height: 40px;
`;

export const Logo = styled.img`
    width: 100%;
    height: 70px;
    margin-bottom: calc(var(--ten-px) * 1.56);
`;

export const MenuUL = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
`;

export const MenuList = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.1rem;
    color: ${({
        theme: {
            colors: { white01, dark02 },
        },
        selected,
    }) => (selected ? dark02 : white01)};
    /* background-color: ${({
        theme: {
            colors: { white01 },
        },
        selected,
    }) => (selected ? white01 : "transparent")}; */

    box-shadow: ${({
        theme: {
            colors: { shadow01 },
        },
        selected,
    }) => (selected ? "0px 3px 5px " + shadow01 : "")};
    transition: all 750ms ease;
    padding-left: calc(var(--ten-px) * 2.4);
    transform: scale(0.95);
    span {
        padding-right: calc(var(--ten-px) * 2.4);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    &:hover {
        color: ${({
            theme: {
                colors: { dark02 },
            },
        }) => dark02};
        &::before {
            animation: ${({
                    theme: {
                        colors: { white01: bgColor },
                    },
                }) => animateMenuListBefore(bgColor)}
                forwards 1150ms ease;
        }
    }
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        transition: all 750ms ease;
        animation: ${({
                selected,
                theme: {
                    colors: { white01: bgColor },
                },
            }) => (selected ? animateMenuListBefore(bgColor) : "")}
            forwards 800ms ease;
        animation-delay: 50ms;
    }
`;

const animateMenuListBefore = (bgColor) => keyframes`
    0% {
        width: 0%;
        height: 1px;
    }
    30% {
        width: 10%;
        height: 1px;
    }
    50% {
        width: 100%;
        height: 1px;
        background: linear-gradient(
            to bottom, 
            ${bgColor});
    }
    70% {
        width: 100%;
        height: 2px;
        background: linear-gradient(
            to bottom,
            ${bgColor});
    }
    100% {
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom, 
            ${bgColor},
            ${bgColor});
    
    }
`;
