import React, { useEffect } from 'react';
import styles from './Header.module.css';
import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            const sticky = header.offsetTop;

            if (window.scrollY > sticky) {
                header.classList.add(styles.fixed);
            } else {
                header.classList.remove(styles.fixed);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header" className={styles.header}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.menuWrapper}>
                        <Logo />
                        <button
                            className={`${styles.hamburger} hamburger--collapse js-open-menu`}
                            type="button"
                            aria-label="Open menu"
                        >
                            <svg className={styles.icon} width="32" height="32">
                                <use href="/img/icons.svg#icon-burger-menu" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${styles.mobileMenuContainer} js-menu-container`}>
                        <div className={styles.mobileMenuOverlay}></div>
                        <div className={styles.mobileMenu}>
                            <button
                                type="button"
                                className={`${styles.close} js-close-menu`}
                                aria-label="Close menu"
                            >
                                <svg className={styles.icon} width="24" height="24">
                                    <use href="/img/icons.svg#icon-cross" />
                                </svg>
                            </button>
                            <ul className={styles.navigationMenu}>
                                <li className={styles.menuItem}>
                                    <a href="#home" className={styles.menuLink}>Home</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a href="#about" className={styles.menuLink}>About</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a href="#plans" className={styles.menuLink}>Services</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <a href="#contact" className={styles.menuLink}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
