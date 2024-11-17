import React from 'react';
import styles from './Plans.module.css';
import PlanCard from "@/components/PlanCard/PlanCard";
import containerStyles from '../../styles/Container.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation} from "swiper/modules";

const Plans = () => {
    const plans = [
        {
            id: 1,
            title: "One-Time Content Shoot",
            price: "3 000 NOK",
            period: "/one-time",
            description:
                "Perfect for quick creation of high-quality content to refresh your profile or boost a marketing campaign.",
            features: [
                {name: "One-day photo and video shoot"},
                {name: "Editing of 3 Reels"},
                {name: "Processing of 20 photos"},
            ],
        },
        {
            id: 2,
            title: "Monthly Content",
            price: "8 000 NOK",
            period: "/month",
            description:
                "A package tailored for brands needing regular content creation for their social media channels.",
            features: [
                {name: "2-3 content shoots per month (photo and video)"},
                {name: "Editing of 6-9 Reels per month"},
                {name: "Processing of 20 photos per month"},
                {name: "Content calendar planning"},
            ],
        },
        {
            id: 3,
            title: "SMM + Content Creation",
            price: "15 000 NOK",
            period: "/month",
            description:
                "A combined package that includes content creation and professional social media management.",
            features: [
                {name: "2-3 content shoots per month"},
                {name: "Editing of 6-9 Reels per month"},
                {name: "Processing of 20 photos per month"},
                {name: "Instagram posts (2 posts/week)"},
                {name: "Stories (up to 3 per day)"},
                {name: "1 storytelling set per week"},
                {name: "Targeted advertising setup and optimization"},
                {name: "Analytics monitoring and reporting"},
            ],
        },
        {
            id: 4,
            title: "SMM Management",
            price: "10 000 NOK",
            period: "/month",
            description:
                "Perfect for clients who already have their own content but need professional management of their social media platforms.",
            features: [
                {name: "Instagram posts (2 posts/week)"},
                {name: "Stories (up to 3 per day)"},
                {name: "Reels (2 per week)"},
                {name: "Engagement with comments and messages"},
                {name: "Targeted advertising setup and optimization"},
                {name: "Analytics monitoring and reporting"},
            ],
        },
        {
            id: 5,
            title: "Content Management Only",
            price: "5 000 NOK",
            period: "/month",
            description:
                "For clients who create their own content but need help organizing and analyzing it professionally.",
            features: [
                {name: "Development of a content calendar"},
                {name: "SEO optimization for posts"},
                {name: "Coordination of 3-5 posts per week"},
                {name: "Text editing and formatting"},
                {name: "Monitoring publication performance"},
            ],
        },
    ];

    return (
        <section className={styles.plans} id="plans">
            <div className={containerStyles.container}>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={false}
                    initialSlide={1}
                    centeredSlidesBounds={false}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: `.${styles.arrowRight}`,
                        prevEl: `.${styles.arrowLeft}`,
                    }}
                >
                    {plans.map((plan) => (
                        <SwiperSlide key={plan.id}>
                            <PlanCard plan={plan}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className={`${styles.arrow} ${styles.arrowLeft}`}>
                    <svg width="82" height="82">
                        <use href="/img/icons.svg#icon-arrow-right"/>
                    </svg>
                </button>
                <button className={`${styles.arrow} ${styles.arrowRight}`}>
                    <svg width="82" height="82">
                        <use href="/img/icons.svg#icon-arrow-right"/>
                    </svg>
                </button>
            </div>
        </section>

    );
};

export default Plans;