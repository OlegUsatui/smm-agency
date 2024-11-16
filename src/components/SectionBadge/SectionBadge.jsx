import React from 'react';
import styles from './SectionBadge.module.css';

const SectionBadge = ({text}) => {
    return (
        <div className={styles.sectionBadge}>
            {text}
        </div>
    );
};

export default SectionBadge;