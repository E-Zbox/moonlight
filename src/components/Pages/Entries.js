import React, { useState } from "react";
import Button from "../Styles/Other/Button";
import {
    EntriesMain,
    EntriesContainer,
    EntriesContents,
    EntryContent,
    Div,
    Section,
    SectionContainer,
} from "../Styles/Other/Container";
import { H2, H3 } from "../Styles/Other/Heading";
import { EntryImage as Image } from "../Styles/Other/Image";

const Entries = ({ data, href }) => {
    const [entriesData, setEntriesData] = useState(data);
    return (
        <SectionContainer
            bgImage="./assets/third_bg.jpg"
            bgPosition="center 90%"
            id={href}
        >
            <Section>
                <EntriesMain>
                    <EntriesContainer>
                        <EntriesContents>
                            {entriesData.map(({ title, body, img }, index) => (
                                <EntryContent key={index}>
                                    <Div>
                                        <H2>{title}</H2>
                                        <H3>{body}</H3>
                                        <Button>Continue Reading</Button>
                                    </Div>
                                    <Div>
                                        <Image src={img} />
                                    </Div>
                                </EntryContent>
                            ))}
                        </EntriesContents>
                    </EntriesContainer>
                </EntriesMain>
            </Section>
        </SectionContainer>
    );
};

export default Entries;
