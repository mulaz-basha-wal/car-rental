import aboutCar1 from "../assets/about-car1.png";

export default function Home() {
    return (
        <div className="homeContainer">
            <div className="homeDescription">
                <h1>
                    Welcome to{" "}
                    <span className="Highlight">Jumbo Car Rental Services</span>
                </h1>
                <p className="homePara">
                    This is a car rental services providing website. It works
                    around different countries day and night services
                </p>
                <img src={aboutCar1} alt="" className="aboutCar2" />
            </div>
        </div>
    );
}
