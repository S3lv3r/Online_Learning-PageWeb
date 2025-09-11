import logo from "../assets/logo_skilline_bg.svg"
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
                                <a href="http://">Home</a>
                                <a href="http://">Careers</a>
                                <a href="http://">Blog</a>
                                <a href="http://">About Us</a>

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
                            <button>Join for free</button>
                            <button>Play (Is a icon)</button>
                            <p>Watch how it works</p>
                        </div>
                    </div>
                    <div className="header-down-rightSide"></div>
                </div>
            </div>
        </>
    );
}

export default Header