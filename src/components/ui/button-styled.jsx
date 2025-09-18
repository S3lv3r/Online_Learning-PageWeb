import styles from "./button-styled.module.css"

export default function ButtonStyled({border,backgroundColor,textColor, text}){ // El uso de variables en CSS, hace que se afecte y no se sobre ponga 
    return(
        <button className={styles.btn} style={{ "--btn-bg": backgroundColor, "--btn-color": textColor, "--btn-border": border }}> 
            {text}
        </button>
    );
}