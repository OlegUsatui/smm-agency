import React from 'react';
import styles from './Plans.module.css';
import PlanCard from "@/components/PlanCard/PlanCard";

const Plans = () => {
    return (
        <section className={styles.plans}>
            <ul className={styles.cardsList}>
                <li><PlanCard></PlanCard></li>
                <li><PlanCard></PlanCard></li>
                <li><PlanCard></PlanCard></li>
            </ul>
        </section>

    );
};

export default Plans;