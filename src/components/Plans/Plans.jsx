import React from 'react';
import styles from './Plans.module.css';
import PlanCard from "@/components/PlanCard/PlanCard";

const Plans = () => {
    const plans = [
        {
            id: 1,
            title: "One-Time Content Shoot",
            price: "$300",
            period: "/one-time",
            description: "For businesses needing a quick content boost",
            features: [
                { name: "Unlimited Task Creation" },
                { name: "Cross-Device Sync" },
                { name: "Drag-and-Drop Organization" },
                { name: "Basic Priority Settings" },
                { name: "Email Support" },
            ],
        },
        {
            id: 2,
            title: "Standard",
            price: "$800",
            period: "/month",
            description:
                "All the essentials you need to stay on top of your tasks, with simplicity and ease.",
            features: [
                { name: "Unlimited Task Creation" },
                { name: "Cross-Device Sync" },
                { name: "Drag-and-Drop Organization" },
                { name: "Basic Priority Settings" },
                { name: "Email Support" },
            ],
        },
        {
            id: 3,
            title: "Mastermind",
            price: "$1500",
            period: "/month",
            description:
                "Take your productivity to the next level with advanced tools and personalized support.",
            features: [
                { name: "Custom Task Categories" },
                { name: "Advanced Priority Settings" },
                { name: "Integration with Calendar" },
                { name: "Unlimited Filters" },
                { name: "Priority Support" },
            ],
        },
    ];
    return (
        <section className={styles.plans} id="plans">
            <ul className={styles.cardsList}>
                <li><PlanCard plan={plans[0]}></PlanCard></li>
                <li><PlanCard plan={plans[1]}></PlanCard></li>
                <li><PlanCard plan={plans[2]}></PlanCard></li>
            </ul>
        </section>

    );
};

export default Plans;