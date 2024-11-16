import React from 'react';
import styles from './PlanCard.module.css';
import Button from "@/components/Button/Button";

const PlanCard = ({plan}) => {
    return (
        <div className={styles.planCard}>
            <div className={styles.planCardTitle}>{plan.title}</div>
            <div className={styles.planCardPrice}>
                <span className={styles.planCardPriceValue}>{plan.price}</span>
                <span className={styles.planCardPriceTerm}>{plan.period}</span>
            </div>
            <div className={styles.planCardDescription}>
                {plan.description}
            </div>
            <div className={styles.planCardFeaturesTitle}>Including:</div>
            <ul className={styles.planCardFeatures}>
                {plan.features.map(feature => (
                    <li key={feature.name} className={styles.planCardFeature}>
                        <span className={styles.checkIcon}>✔</span> {feature.name}
                    </li>
                ))}
            </ul>
            <Button text={"Purchase"}></Button>
        </div>
    );
};

export default PlanCard;
