import "./About.css";
import aboutCar from "../assets/about_car.jpg";
import aboutCar1 from "../assets/about-car1.png";
export default function About() {
    return (
        <div>
            <img className="aboutCar" src={aboutCar} alt="" />
            <div className="aboutDescFlex">
                <div>
                    <h1 className="heading">About</h1>
                    <p className="passage">
                        One of the finest people mobility companies in India
                        with separate divisions serving Corporate executive car
                        rental and employee transportation, serving travel
                        agents, tour operators and Event management companies
                        for their ground transportation needs. Eco Europcar
                        offers Chauffeur Driven from mid to luxury segment cars
                        ranging with brands like Tata, Volvo, Imported Mercedes
                        and Toyota Coaches with the only company offering
                        Chrysler Stretch Limousines. With a professional
                        management and offices in Delhi, Noida, Gurgaon, Jaipur,
                        Mumbai, Pune, Kolkata, Ahmedabad, Hyderabad, Chennai,
                        Bangalore, Cochin, Goa, Coimbatore, Lucknow and 80 other
                        cities in India, Eco Europcar is now probably India's
                        largest B2B passenger transportation company. Our
                        partnership with Europcar gives our clients access to
                        the best cars and privileges at over 3700 locations in
                        over 130 countries worldwide Eco Europcar has always
                        been a leader in tech with in house technology driving
                        every aspect of the business to offer a seamless
                        experience to our customers. Thanks to all our loyal
                        clients and team members who have stood by us over the
                        years, the brand has been built on operational
                        excellence and repeated customers.
                    </p>
                </div>
                <img src={aboutCar1} alt="" className="aboutCar2" />
            </div>
            <div className="culture">
                <h1>Our Culture & Core Values</h1>
                <p>
                    We are a Group of Passionate Professionals, who believe in
                    quality service delivery along in-time service with client
                    safety. With this we are in direction to grow the company
                    with increased number of happy clients having high rate of
                    retention.
                </p>
            </div>
        </div>
    );
}
