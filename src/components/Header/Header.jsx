import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>O&M</div>
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <a href="#home" className={styles.navItem}>Home</a>
                        </li>
                        <li>
                            <a href="#about" className={styles.navItem}>About</a>
                        </li>
                        <li>
                            <a href="#services" className={styles.navItem}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" className={styles.navItem}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;