import React from 'react';
import styles from './PlanCard.module.css';

const PlanCard = () => {
    return (
        <div className={styles.planCard}>
            <div className={styles.planCardTitle}>One-Time Content Shoot</div>
            <div className={styles.planCardPrice}>
                <span className={styles.planCardPriceValue}>$300</span>
                <span className={styles.planCardPriceTerm}>/one-time</span>
            </div>
            <div className={styles.planCardDescription}>
                For businesses needing a quick content boost
            </div>
            <div className={styles.planCardNote}>
                Billed in one annual payment.
            </div>
            <div className={styles.planCardFeaturesTitle}>Including:</div>
            <ul className={styles.planCardFeatures}>
                <li className={styles.planCardFeature}>
                    <span className={styles.checkIcon}>✔</span> Unlimited Task Creation
                </li>
                <li className={styles.planCardFeature}>
                    <span className={styles.checkIcon}>✔</span> Cross-Device Sync
                </li>
                <li className={styles.planCardFeature}>
                    <span className={styles.checkIcon}>✔</span> Drag-and-Drop Organization
                </li>
                <li className={styles.planCardFeature}>
                    <span className={styles.checkIcon}>✔</span> Basic Priority Settings
                </li>
                <li className={styles.planCardFeature}>
                    <span className={styles.checkIcon}>✔</span> Email Support
                </li>
            </ul>
        </div>
    );
};

export default PlanCard;
