import React from 'react';
import styles from './About.module.css';
import SectionBadge from "@/components/SectionBadge/SectionBadge";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionTitleStyles from '@/components/SectionTitle/SectionTitle.module.css';
import containerStyles from '@/styles/Container.module.css';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={containerStyles.container}>
                <div className={styles.innerContainer}>
                    <SectionBadge text="About"/>
                    <div className={styles.title}>
                        <SectionTitle>Growing your<span
                            className={SectionTitleStyles.highlighted}>brand</span> together.</SectionTitle>
                    </div>
                    <p className={styles.description}>Hello! I&#39;m Olena, an SMM specialist with over 6 years of
                        experience
                        crafting impactful photo and video content. I&#39;ve worked with government institutions,
                        personal
                        brands, and various B2C and B2B projects, helping businesses connect with their audiences and
                        grow
                        through social media. I believe every brand deserves a strategic, results-driven approach to
                        stand
                        out
                        online.</p>
                </div>
            </div>
        </section>
    );
};

export default About;