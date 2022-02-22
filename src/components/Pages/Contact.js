import React from "react";
import {
    ContactMain,
    ContactContainer,
    ContactMapDiv,
    ContactFormDiv,
    ContactForm,
    ContactInput,
    ContactMessage,
    SectionContainer,
    Section,
} from "../Styles/Other/Container";
import Button from "../Styles/Other/Button";
// hooks
import useForm from "../../hooks/useForm";

const Contact = ({ href }) => {
    const [formState, setFormState] = useForm({
        input_name: "",
        input_email: "",
        input_subject: "",
        input_message: "",
    });
    return (
        <SectionContainer id={href} bgImage="./assets/fifth_bg.jpg">
            <Section>
                <ContactMain>
                    <ContactContainer>
                        <ContactMapDiv>
                            <iframe
                                title="contact-location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0379423463087!2d3.3853280143168902!3d6.516881725049357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cfb1afcf7f7%3A0xc83fb4ac2325bfbd!2sFaculty%20of%20Engineering!5e0!3m2!1sen!2sng!4v1645525020600!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                // allowfullscreen=""
                                loading="lazy"
                            ></iframe>
                        </ContactMapDiv>
                        <ContactFormDiv>
                            <ContactForm>
                                <ContactInput
                                    onChange={setFormState}
                                    value={formState.input_name}
                                    name="input_name"
                                    placeholder="Your name..."
                                />
                                <ContactInput
                                    onChange={setFormState}
                                    value={formState.input_email}
                                    name="input_email"
                                    placeholder="Your email..."
                                />
                                <ContactInput
                                    onChange={setFormState}
                                    value={formState.input_subject}
                                    name="input_subject"
                                    placeholder="Subject..."
                                />
                                <ContactMessage
                                    onChange={setFormState}
                                    value={formState.input_message}
                                    name="input_message"
                                    placeholder="Your message..."
                                ></ContactMessage>
                                <Button>Send Now</Button>
                            </ContactForm>
                        </ContactFormDiv>
                    </ContactContainer>
                </ContactMain>
            </Section>
        </SectionContainer>
    );
};

export default Contact;
