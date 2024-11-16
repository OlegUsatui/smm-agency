import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <span className={styles.heroName}>Olena Moshko</span>
                <h1 className={styles.heroTitle}>Social media marketing specialist & <span className={styles.heroContentSpan}>content creator</span></h1>
                <p className={styles.heroSubtitle}>Creating content that inspires, motivates, and captures the audience’s attention.</p>
            </div>
        </section>
    );
};

export default Hero;