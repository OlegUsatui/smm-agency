import React from 'react';
import styles from './Services.module.css';
import SectionBadge from "@/components/SectionBadge/SectionBadge";
import containerStyles from '../../styles/Container.module.css';


const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className={containerStyles.container}>
                <SectionBadge text="Services"/>
                <ul className={styles.servicesList}>
                    <li className={styles.serviceCard}>
                        <div className={styles.serviceNumber}>01</div>
                        <h3 className={styles.serviceTitle}>SMM management</h3>
                        <p className={styles.serviceDescription}>
                            Strategic management of your social media platforms aimed at attracting new audiences and
                            building
                            trust.
                            Includes creating posts, stories, and targeted advertising.
                        </p>
                    </li>
                    <li className={styles.serviceCard}>
                        <div className={styles.serviceNumber}>02</div>
                        <h3 className={styles.serviceTitle}>Content creation</h3>
                        <p className={styles.serviceDescription}>
                            Photo and video production, editing, and creating unique content for your brand. Development
                            of
                            ideas that
                            engage your audience and align with your style.
                        </p>
                    </li>
                    <li className={styles.serviceCard}>
                        <div className={styles.serviceNumber}>03</div>
                        <h3 className={styles.serviceTitle}>Content management</h3>
                        <p className={styles.serviceDescription}>
                            Content planning, creating a content calendar, text editing, and coordinating publications
                            to
                            ensure
                            smooth
                            operation across your platforms.
                        </p>
                    </li>
                </ul>
            </div>
        </section>

    );
};

export default Services;