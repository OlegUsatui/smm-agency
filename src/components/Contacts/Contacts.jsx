import React from 'react';
import styles from "../About/About.module.css";
import containerStyles from "../../styles/Container.module.css";
import SectionBadge from "../SectionBadge/SectionBadge";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionTitleStyles from "../SectionTitle/SectionTitle.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contacts = () => {
    return (
        <section className={styles.about} id="contacts">
            <div className={containerStyles.container}>
                <div className={styles.innerContainer}>
                    <SectionBadge text="About"/>
                    <div className={styles.title}>
                        <SectionTitle>
                            Ready to take
                            <span className={SectionTitleStyles.highlighted}>your brand </span>
                            to the next level?
                        </SectionTitle>
                    </div>
                    <p className={styles.description}>
                        Book a consultation today and discover how quality content and a
                        strategic approach can make your business stand out on social media.
                    </p>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;