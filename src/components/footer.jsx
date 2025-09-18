import ButtonStyled from "./ui/button-styled";
import styles from "./footer-style.module.css"
import logo from "../assets/logo_skilline_wbg.svg"

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.container_properties}>
                <img src={logo} alt="" />
                <div className={styles.line01}></div>
                <div className={styles.container_properties_p}>
                    <p>Virtual Class<br></br> for Zoom</p>
                </div>
            </div>
            <div className={styles.container_newsletter}>
                <div className={styles.container_newsletter_p}>
                    <p>Subscribe to get our Newsletter</p>
                </div>
                <div className={styles.container_newsletter_register}>
                    <input type="email" placeholder="Your Email"/>
                    <ButtonStyled
                        text={"Subscribe"}
                        textColor={"#ffff"}
                        backgroundColor={"#3e41a0ff"}
                        border={"1px solid transparent"}
                    />
                </div>
            </div>
            <div className={styles.container_legal}>
                    <div className={styles.container_legal_pages}>
                        <p>Careers</p>
                        <div className={styles.line02}></div>
                        <p>Privacy Policy</p>
                        <div className={styles.line02}></div>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className={styles.container_legal_copyright}>
                        <p>© 2021 Class Technologies Inc. </p>
                    </div>
                </div>
        </div>
    );
}