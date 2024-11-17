import React from 'react';
import styles from './BrandCarousel.module.css';
import Image from 'next/image'
import containerStyles from '../../styles/Container.module.css';

const BrandCarousel = () => {
    const brands = [
        '/img/brand1.svg',
        '/img/brand2.svg',
        '/img/brand3.svg',
        '/img/brand4.svg',
        '/img/brand5.svg',
    ];

    return (
        <section className={styles.brandCarousel}>
            <div className={containerStyles.container}>
                <div className={styles.logos}>
                    <div className={styles.logosSlide}>
                        {brands.map((brand, index) => (
                            <Image
                                key={index}
                                src={brand}
                                width={100}
                                height={50}
                                alt={`Brand ${index + 1}`}
                                className={styles.brandLogo}
                            />
                        ))}
                    </div>
                    <div className={styles.logosSlide}>
                        {brands.map((brand, index) => (
                            <Image
                                key={index}
                                src={brand}
                                width={100}
                                height={50}
                                alt={`Brand ${index + 1}`}
                                className={styles.brandLogo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
);
};

export default BrandCarousel;
