import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
    // needs background-image prop
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: scroll hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Contents = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: left;
`;

export const SectionContainer = styled.a`
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    width: ${({
        theme: {
            width: { wdefault },
        },
    }) => wdefault};
    background-image: url(${({ bgImage }) => bgImage});
    background-position: ${({ bgPosition }) =>
        bgPosition ? bgPosition : "center 0%"};
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1px;
    background-color: ${({
        theme: {
            colors: { dark01 },
        },
    }) => dark01};
    width: 70%;
    height: ${({
        theme: {
            height: { hdefault },
        },
    }) => hdefault};
    overflow: hidden;
`;

export const Div = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 20px;
`;

export const HomeMain = styled.main`
    width: 82%;
    display: grid;
    grid-template-columns: 28% auto;
    grid-gap: 15px;
`;

export const HomeButtonDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    width: 50%;
`;

export const AboutMain = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    overflow: hidden scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 10px;
        &-button {
            height: 0px;
        }
        &-thumb {
            background-color: ${({
                theme: {
                    colors: { white03 },
                },
            }) => white03};
        }
        &-track {
            background-color: ${({
                theme: {
                    colors: { dark02 },
                },
            }) => dark02};
        }
    }
`;

export const AboutDiv = styled.div`
    width: 49%;
    height: fit-content;
    box-sizing: border-box;
    padding: calc(var(--ten-px) * 5) calc(var(--ten-px) * 5.5) 0px;
`;

export const EntriesMain = styled.main`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll scroll;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        &-track {
            background-color: ${({
                theme: {
                    colors: { dark02 },
                },
            }) => dark02};
        }
        &-thumb {
            background-color: ${({
                theme: {
                    colors: { white03 },
                },
            }) => white03};
        }
    }
`;

export const EntriesContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: calc(var(--ten-px) * 1.5) calc(var(--ten-px) * 2);
`;

export const EntriesContents = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
`;

export const EntryContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 5px;
    padding: calc(var(--ten-px) * 1.3) calc(var(--ten-px) * 1.7);
    transition: all 450ms ease;
    /* margin-right: calc(var(--ten-px) * 2); */
    & div {
        margin-bottom: calc(var(--ten-px) * 2);
    }
    &:nth-child(2n) {
        flex-direction: column-reverse;
    }
    &:hover {
        background-color: ${({
            theme: {
                colors: { shadow02 },
            },
        }) => shadow02};
    }
`;

export const WorkMain = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const WorkContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: calc(var(--ten-px) * 2.5) calc(var(--ten-px) * 2.5)
        calc(var(--ten-px) * 1.2);
    overflow: hidden scroll;
    &::-webkit-scrollbar {
        width: 10px;
        &-track {
            background-color: ${({
                theme: {
                    colors: { dark02 },
                },
            }) => dark02};
        }
        &-thumb {
            background-color: ${({
                theme: {
                    colors: { white03 },
                },
            }) => white03};
        }
    }
`;

export const WorkContents = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const WorkContent = styled.div`
    justify-self: flex-start;
    position: relative;
    width: 32%;
    min-width: 280px;
    height: 186px;
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;
    padding: var(--ten-px) 0px;
    box-sizing: border-box;
    margin-bottom: calc(var(--ten-px) * 1.5);
    background: url(${({ defaultImg }) => defaultImg});
    transition: all 700ms ease;
    z-index: 0;
    * {
        z-index: 2;
        opacity: 0;
        transition: all 850ms ease;
    }
    &:hover {
        padding: var(--ten-px) calc(var(--ten-px) * 2);
        * {
            opacity: 1;
        }
        &::before {
            background-color: ${({
                theme: {
                    colors: { shadow02 },
                },
            }) => shadow02};
        }
    }
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        position: absolute;
        z-index: 1;
        transition: all 750ms ease;
    }
`;

export const WorkDiv = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 10px;
`;

export const ContactMain = styled.main`
    width: 100%;
    height: 100%;
    padding: calc(var(--ten-px) * 3.4);
    box-sizing: border-box;
    overflow: hidden scroll;
    &::-webkit-scrollbar {
        width: 10px;
        &-track {
            background-color: ${({
                theme: {
                    colors: { dark02 },
                },
            }) => dark02};
        }
        &-thumb {
            background-color: ${({
                theme: {
                    colors: { white03 },
                },
            }) => white03};
        }
    }
`;

export const ContactContainer = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ContactMapDiv = styled.div`
    width: 47%;
    height: 100%;
`;

export const ContactFormDiv = styled.div`
    width: 47%;
    height: 100%;
`;

export const ContactForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContactInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    color: ${({
        theme: {
            colors: { white01 },
        },
    }) => white01};
    background-color: ${({
        theme: {
            colors: { white02 },
        },
    }) => white02};
    font-size: 1rem;
    padding: var(--ten-px);
    box-sizing: border-box;
`;

export const ContactMessage = styled.textarea`
    width: 100%;
    height: 50%;
    resize: none;
    border: none;
    font-size: 1rem;
    padding: var(--ten-px);
    box-sizing: border-box;
    background-color: ${({
        theme: {
            colors: { white02 },
        },
    }) => white02};
`;
