import logo from "../assets/logo_skilline_bg.svg"
import girl from "../assets/girl-header.svg"
import profile from "../assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faPlay,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../components/header-style.css"
function Header() {
    return (
        <>
            <div className="background-header">
                <div className="header-up">
                    <div className="logo-header-up">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="items-upper-header-up"></div>
                    <div className="items-header-up">
                        <nav>
                            <ul>
                                <a href="">Home</a>
                                <a href="#features">Features</a>
                                <a href="#testimonial">Testimonial</a>
                                <a href="#news">News</a>

                            </ul>
                        </nav>
                    </div>
                    <div className="account-header-up">
                        <button className="-button-login">Login</button>
                        <button className="-button-signup">Sign Up</button>
                    </div>
                </div>
                <div className="header-down">
                    <div className="header-down-leftSide">
                        <div className="-leftSide-statement">
                            <p>
                                <strong>Studying</strong> Online is now much easier
                            </p>
                        </div>
                        <div className="-leftSide-resume">
                            <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
                        </div>
                        <div className="-leftSide-buttons">
                            <button className="-leftSide-buttons-joinBTN">Join for free</button>
                            <button className="-leftSide-buttons-playBTN"><FontAwesomeIcon icon={faPlay} className="-playBTN-icon"/></button>
                            <p>Watch how it works</p>
                        </div>
                    </div>
                    <div className="header-down-rightSide">
                        <img src={girl} className="-rightSide-background-img" />
                        <div className="-rightSide-background-card" id="assistedDiv">
                            <div className="rightSide-background-card-img">
                                <div><FontAwesomeIcon icon={faCalendarDays} className="-card-img-fontawesome"/></div>
                                
                            </div>
                            <div className="rightSide-background-card-text">
                                <span>250K</span>
                                <p>Assisted Student</p>
                            </div>
                        </div>
                        <div className="-rightSide-background-card" id="congratulationsDiv">
                            <div className="rightSide-background-card-img">
                                <div><FontAwesomeIcon icon={faEnvelope} className="-card-img-fontawesome"/></div>
                                
                            </div>
                            <div className="rightSide-background-card-text">
                                <span>Congratulations</span>
                                <p>Your admissions completed</p>
                            </div>
                        </div>
                        <div className="-rightSide-background-card" id="userDiv">
                            <div className="rightSide-background-card-img">
                                <img src={profile} alt="userProfile" />
                            </div>
                            <div className="rightSide-background-card-text">
                                <span>User Experience Class</span>
                                <p>Today at 12.00 PM</p>
                                <button>Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header