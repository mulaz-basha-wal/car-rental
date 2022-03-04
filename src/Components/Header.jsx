import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="logoWrapper">
                <h2 className="logoTitle">Jumbo Car Rentals</h2>
                <p className="logoCaption">
                    <i>An easy way to drive</i>
                </p>
            </div>
            <div className="linksWrapper">
                <Link className="link" to="/">
                    Home
                </Link>
                <Link className="link" to="/employees">
                    Employees
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
                <Link className="link" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}
