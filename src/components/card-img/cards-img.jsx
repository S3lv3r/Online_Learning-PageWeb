import styles from "./cards-img.module.css"
import ButtonStyled from "../ui/button-styled";


export default function CardImg({ CItitle, CIimg, BSborder, BStext, BStextColor, BSbackgroundColor }) {
    return (
        <div className={styles.background}>
            <img src={CIimg} alt="" />
            <div className={styles.background_content}>
                <p>{CItitle}</p>
                <div className={styles.background_content_btn}>
                    <ButtonStyled
                        border={BSborder}
                        backgroundColor={BSbackgroundColor}
                        text={BStext}
                        textColor={BStextColor}/>
                </div>
                
            </div>
        </div>
    );
}