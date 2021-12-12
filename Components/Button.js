import styles from "../styles/navbar.module.css"
import { FaArrowRight, } from "react-icons/fa";

const Button = ({text, icon}) => {
    return (
        <button className= {styles.btn}>
            {text}
            <FaArrowRight className= {styles.icon} />
            
        </button>
    )
}

export default Button
