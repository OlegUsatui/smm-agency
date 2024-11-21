import React from 'react';
import styles from './Hero.module.css';
import Button from "@/components/Button/Button";
import containerStyles from '@/styles/Container.module.css';

const Hero = () => {
    const scrollToPricing = () => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.heroSection} id='home'>
            <div className={containerStyles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Social media marketing specialist & <span
                        className={styles.heroContentSpan}>content creator</span></h1>
                    <p className={styles.heroSubtitle}>Creating content that inspires, motivates, and captures the
                        audience’s attention.</p>
                    <div className={styles.heroButton}>
                        <Button text={"LEARN MORE"} onClick={scrollToPricing}></Button>
                    </div>
                </div>
            </div>
        </section>
);
};

export default Hero;