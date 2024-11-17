import React, { useState } from 'react';
import styles from './FAQ.module.css';
import SectionBadge from "@/components/SectionBadge/SectionBadge";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SectionTitleStyles from "@/components/SectionTitle/SectionTitle.module.css";
import containerStyles from '../../styles/Container.module.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Управление активным вопросом

    const questions = [
        {
            question: 'Is Simplicity available for all devices?',
            answer:
                'Simplicity is designed for Mac and syncs across all your devices, so you can access your tasks anywhere.',
        },
        {
            question: 'How easy is it to get started?',
            answer:
                'Getting started with Simplicity is easy! Just follow our simple onboarding guide and set up your tasks in minutes.',
        },
        {
            question: 'Can I try Simplicity before committing to a plan?',
            answer: 'Yes, Simplicity offers a free trial to help you explore all its features before committing.',
        },
        {
            question: 'What’s the difference between Standard and Mastermind plans?',
            answer:
                'The Mastermind plan includes advanced features such as priority support, custom categories, and extended analytics.',
        },
        {
            question: 'Can I cancel my plan anytime?',
            answer: 'Absolutely! You can cancel your plan anytime through your account settings.',
        },
        {
            question: 'Is customer support available?',
            answer:
                'Yes, our customer support team is available 24/7 to assist you with any issues or questions you may have.',
        },
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие вопроса
    };

    return (
        <section className={styles.faqSection}>
            <div className={containerStyles.container}>
                <div className={styles.faqHeader}>
                    <SectionBadge text="FAQ"/>
                    <SectionTitle>
                        Everything you <span className={SectionTitleStyles.highlighted}>need</span> to know.
                    </SectionTitle>
                    <p>
                        Got questions? We’ve got answers. Here’s everything you need to know before getting started.
                    </p>
                </div>
                <div className={styles.faqList}>
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${
                                activeIndex === index ? styles.active : ''
                            }`}
                            onClick={() => toggleQuestion(index)}
                        >
                            <div className={styles.faqQuestion}>
                                {item.question}
                                <span className={styles.faqToggle}>
                {activeIndex === index ? '-' : '+'}
              </span>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
);
};

export default FAQ;
