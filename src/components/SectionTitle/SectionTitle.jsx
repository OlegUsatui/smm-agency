import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => {
    return (
        <h3 className={styles.sectionTitle}>
            {children}
        </h3>
    );
};

export default SectionTitle;