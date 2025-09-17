import styles from "./new-article.module.css"


export default function NewArticle({FrontImage, Title, Resume, Topic}){
    return(
        <div className={styles.container}>
            <div className={styles.container_front}>
                <img src={FrontImage} alt="" />
                <span>{Topic}</span>
            </div>
            <div className={styles.container_content}>
                <h3>{Title}</h3>
                <p>{Resume}</p>
            </div>
        </div>
    );
}