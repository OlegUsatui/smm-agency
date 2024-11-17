import React from "react";
import styles from "./Footer.module.css";
import containerStyles from '../../styles/Container.module.css';
import Logo from "@/components/Logo/Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={containerStyles.container}>
                <div className={styles.footerThumb}>
                    <Logo/>
                    <address className={styles.footerAddress}>
                        <a href="mailto:lena_nm@ukr.net" target="_blank" className={styles.footerContacts}>
                            lena_nm@ukr.net
                        </a>
                    </address>
                    <div className={styles.social}>
                        <ul className={styles.socialList}>
                            <li className={styles.socialItem}>
                                <a
                                    href="https://www.instagram.com/elena_moshko/"
                                    target="_blank"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialSvg}>
                                        <svg width="30" height="30">
                                            <use href="/img/icons.svg#icon-instagram"></use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a
                                    href="https://www.tiktok.com/@elena_moshko"
                                    target="_blank"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialSvg}>
                                        <svg width="30" height="30">
                                            <use href="/img/icons.svg#icon-tiktok"></use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a
                                    href="https://www.behance.net/elenamoshko"
                                    target="_blank"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialSvg}>
                                        <svg width="30" height="30">
                                            <use href="/img/icons.svg#icon-behance"></use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className={styles.socialItem}>
                                <a
                                    href="https://www.linkedin.com/in/moshko-elena/"
                                    target="_blank"
                                    className={styles.socialLink}
                                >
                                    <span className={styles.socialSvg}>
                                        <svg width="30" height="30">
                                            <use href="/img/icons.svg#icon-linkedin"></use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
