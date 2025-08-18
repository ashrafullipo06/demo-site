import HeroSection from "../components/home/HeroSection";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <section id="home">
                <HeroSection />
            </section>

            <section id="services">
                <Services />
            </section>

            {/* Future sections like Portfolio, Contact, Blog */}
            {/* <section id="portfolio"><Portfolio/></section> */}
            {/* <section id="contact"><Contact/></section> */}
        </div>
    );
};

export default Home;
