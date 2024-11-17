import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Logo from "@/components/Logo/Logo";
import containerStyles from "@/styles/Container.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header id="header" className={styles.header}>
            <div className={containerStyles.container}>
                <div className={styles.container}>
                    <div className={styles.innerContainer}>
                        <div className={styles.menuWrapper}>
                            <Logo />
                            <button
                                className={`${styles.hamburger} hamburger--collapse`}
                                type="button"
                                aria-label="Open menu"
                                onClick={toggleMenu}
                            >
                                <svg className={styles.icon} width="32" height="32">
                                    <use href="/img/icons.svg#icon-burger-menu" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`${styles.mobileMenuContainer} ${
                                isMenuOpen ? styles.isOpen : ''
                            }`}
                        >
                            <div
                                className={styles.mobileMenuOverlay}
                                onClick={closeMenu}
                            ></div>
                            <div className={styles.mobileMenu}>
                                <button
                                    type="button"
                                    className={`${styles.close}`}
                                    aria-label="Close menu"
                                    onClick={closeMenu}
                                >
                                    <svg className={styles.icon} width="24" height="24">
                                        <use href="/img/icons.svg#icon-cross" />
                                    </svg>
                                </button>
                                <ul className={styles.navigationMenu}>
                                    <li className={styles.menuItem}>
                                        <a href="#home" className={styles.menuLink} onClick={closeMenu}>
                                            Home
                                        </a>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <a href="#about" className={styles.menuLink} onClick={closeMenu}>
                                            About
                                        </a>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <a href="#plans" className={styles.menuLink} onClick={closeMenu}>
                                            Services
                                        </a>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <a href="#contact" className={styles.menuLink} onClick={closeMenu}>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
