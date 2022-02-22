import React from "react";
// components
import Home from "./Home";
import About from "./About";
import Entries from "./Entries";
import Work from "./Work";
// styles
import { Main, Container, Contents } from "../Styles/Other/Container";
import Contact from "./Contact";

const Pages = ({ data: { entriesItems, workItems }, handleScroll }) => {
    return (
        <Main>
            <Container onScroll={handleScroll}>
                <Contents>
                    <Home href="home" />
                    <About href="about" />
                    <Entries href="entries" data={entriesItems} />
                    <Work href="work" data={workItems} />
                    <Contact href="contact" />
                </Contents>
            </Container>
        </Main>
    );
};

export default Pages;
