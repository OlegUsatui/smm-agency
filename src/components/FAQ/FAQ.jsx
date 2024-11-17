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
            question: 'Can the plan be changed during the collaboration?',
            answer: 'Yes, the plan can be adjusted during the collaboration to meet the changing needs of your business or budget. Our goal is to ensure maximum efficiency within your request.',
        },
        {
            question: 'Can I add or remove services from the selected plan?',
            answer: 'Yes, during the consultation, you will receive a full list of available services. You can add new services, exclude those that are not relevant, or create a customized package tailored to your needs.',
        },
        {
            question: 'What if the cost of the package exceeds my budget?',
            answer: 'We can optimize the selected package by reducing the volume of certain services to lower the cost while maintaining the effectiveness of the work.',
        },
        {
            question: 'Can I pause or terminate the collaboration early?',
            answer: 'Yes, you can terminate the collaboration at any time by notifying us in advance. We will complete all ongoing tasks, deliver the materials created, and prepare a final report.',
        },
        {
            question: 'How does the collaboration start?',
            answer: 'The collaboration begins with a consultation, during which we analyze your goals, select the appropriate plan, and agree on all details. Before the consultation, you will receive a file with a detailed description of all service packages. This will help you familiarize yourself with the options and determine which plan best suits your business needs.',
        },
        {
            question: 'Are there discounts for long-term contracts?',
            answer: 'Yes, clients who sign contracts for a term of 3 months or more may receive individual terms and discounts.',
        },
        {
            question: 'Do I need to provide materials for the work?',
            answer: 'If your plan does not include content creation, we work with the materials you provide, such as photos, videos, or graphics.',
        },
        {
            question: 'What happens after the collaboration ends?',
            answer: 'After the collaboration ends, you will receive all created materials, a detailed report on the completed work, and recommendations for further development of your social media strategy.',
        },
        {
            question: 'How is payment made?',
            answer: 'Payment is made before the start of work. For long-term plans, monthly payments are available. All details are discussed during the initial consultation.',
        },
        {
            question: 'How long does it take to complete the tasks?',
            answer: 'The duration of work depends on the selected plan: from a few days for one-time services to regular monthly work for subscriptions. If your plan includes the development of an SMM strategy, task implementation begins only after the strategy is approved, along with the content strategy and content plan created based on it.',
        },
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Открытие/закрытие вопроса
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={containerStyles.container}>
                <div className={styles.faqHeader}>
                    <SectionBadge text="FAQ"/>
                    <SectionTitle>
                        Everything you<span className={SectionTitleStyles.highlighted}>need</span> to know.
                    </SectionTitle>
                    <p>
                        Got questions? We’ve got answers. Here’s everything you need to know before getting started.
                    </p>
                </div>
                <ul className={styles.faqList}>
                    {questions.map((item, index) => (
                        <li
                            key={index}
                            className={styles.faqItem}
                            onClick={() => toggleQuestion(index)}>
                            <div className={styles.faqQuestion}>
                                {item.question}
                                <span className={styles.faqToggle}>
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className={styles.faqAnswer}>{item.answer}</div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
);
};

export default FAQ;
