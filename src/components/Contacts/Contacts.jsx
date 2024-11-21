import React from 'react';
import styles from "./Contacts.module.css";
import containerStyles from "@/styles/Container.module.css";
import SectionBadge from "@/components/SectionBadge/SectionBadge";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionTitleStyles from "@/components/SectionTitle/SectionTitle.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";

const Contacts = ({plan}) => {
    return (
        <section className={styles.contacts} id="contacts">
            <div className={containerStyles.container}>
                <div className={styles.innerContainer}>
                    <SectionBadge text="Contact"/>
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
                    <ContactForm plan={plan}/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;