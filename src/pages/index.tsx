import {useState} from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Plans from "@/components/Plans/Plans";
import BrandCarousel from "@/components/Brands/BrandCarousel";
import FAQ from "@/components/FAQ/FAQ";
import Services from "@/components/Services/Services";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

interface Plan {
    description: string;
    features: Feature[];
    id: number;
    period: string;
    price: string;
    title: string;
}

interface Feature {
    name: string;
}

function Home() {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null); // Состояние для выбранного плана

    const handlePlanClick = (plan: Plan) => {
        setSelectedPlan(plan);
    };

    return (
        <>
            <Head>
                <title>Olena Moshko • SMM-specialist | content creator</title>
                <meta name="description" content="Olena Moshko • SMM-specialist | content creator"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header/>
            <main>
                <Hero/>
                <BrandCarousel/>
                <Services/>
                <About/>
                <Plans onPlanClick={handlePlanClick}/>
                <FAQ/>
                <Contacts plan={selectedPlan}/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;