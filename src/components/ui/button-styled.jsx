import styles from "./button-styled.module.css"

export default function ButtonStyled({border,backgroundColor,textColor, text}){
    return(
        <button className={styles.btn} style={{ backgroundColor: backgroundColor, color: textColor, border: border }}>
            {text}
        </button>
    );
}