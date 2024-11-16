import React from 'react';
import styles from './About.module.css';
import SectionBadge from "../SectionBadge/SectionBadge";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionTitleStyles from '../SectionTitle/SectionTitle.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <SectionBadge text="About" />
            <SectionTitle>Growing your <span className={SectionTitleStyles.highlighted}>brand</span> together.</SectionTitle>
            <p>Hello! I&#39;m Olena, an SMM specialist with over 6 years of experience crafting impactful photo and video content. I've worked with government institutions, personal brands, and various B2C and B2B projects, helping businesses connect with their audiences and grow through social media. I believe every brand deserves a strategic, results-driven approach to stand out online.</p>
        </section>
    );
};

export default About;