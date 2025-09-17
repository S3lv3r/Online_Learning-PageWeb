import styles from "./new-principal.module.css"
import new_1 from "../../assets/new-4.png"

export default function NewPrincipal({FrontImage,Topic,Title,Resume}) {
    return (
        <div className={styles.container}>
            <div className={styles.container_front}>
                <img src={FrontImage} alt="" />
            </div>
            <div className={styles.container_content}>
                <span>{Topic}</span>
                <h3>{Title}</h3>
                <p>{Resume}</p>
                <a>Read more</a>
            </div>
        </div>
    );
}