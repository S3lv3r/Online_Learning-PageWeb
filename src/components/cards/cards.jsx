import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./cards.module.css"


export default function CardInformation({icon, iconColor, title, text}) {
    return (
        <div className={styles.parent}>
            <div className={styles.divIcon} style={{ backgroundColor: iconColor }}>
                <FontAwesomeIcon icon={icon} className={styles.iconCircle} />
            </div>
            <div className={styles.content}>
                <div className={styles.content_text}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}