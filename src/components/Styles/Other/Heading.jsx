import styled from "styled-components";

export const H1 = styled.h1`
    color: ${({
        theme: {
            colors: { white01 },
        },
    }) => white01};
    border-bottom: 2px solid
        ${({
            theme: {
                colors: { white01 },
            },
        }) => white01};
    width: fit-content;
    font-size: 2.25rem;
    padding: var(--ten-px) 0px;
    text-transform: ${({ textTransform }) => textTransform};
`;

export const H2 = styled.h2`
    color: ${({
        theme: {
            colors: { white01 },
        },
    }) => white01};
    border-bottom: 2px solid
        ${({
            theme: {
                colors: { white01 },
            },
        }) => white01};
    width: fit-content;
    font-size: 1.5rem;
    padding-bottom: calc(var(--ten-px) * 0.4);
    text-transform: ${({ textTransform }) => textTransform};
`;

export const H3 = styled.h3`
    color: ${({
        theme: {
            colors: { white01 },
        },
    }) => white01};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: ${({ letterSpacing }) =>
        letterSpacing ? letterSpacing : "0.05rem"};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.85rem")};
    text-transform: ${({ textTransform }) => textTransform};
`;

export const HL = styled.span`
    // highlight bolden text with any color
    color: ${({
        theme: {
            colors: { blue01 },
        },
        color,
    }) => (color ? color : blue01)};
    font-weight: 600;
`;
