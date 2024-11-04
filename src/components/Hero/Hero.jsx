import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>OLENA MOSHKO</h1>
                <p className={styles.heroSubtitle}>SOCIAL MEDIA MARKETING SPECIALIST & CONTENT CREATOR</p>
                <button className={styles.heroButton}>BOOK A CONSULTATION</button>
            </div>
        </section>
    );
};

export default Hero;