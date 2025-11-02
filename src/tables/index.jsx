import Styles from "./tablex.module.css";

export default () => {
    return (
        <ul className={Styles.table}>
            <ul className={Styles.tableLineTop}>
                <li>Classification</li>
                <li>I.M.C.</li>
            </ul>
            <ul className={Styles.tableLine}>
                <li> UnderWeight </li>
                <li> Less than 18,5 </li>
            </ul>
            <ul className={Styles.tableLine}>
                <li> Healthy </li>
                <li> 18,5 - 24,9 </li>
            </ul>
            <ul className={Styles.tableLine}>
                <li> OverWeight </li>
                <li> 25,0 - 29,9 </li>
            </ul>
            <ul className={Styles.tableLine}>
                <li> Obese </li>
                <li> 30,0 - 34,9 </li>
            </ul>
            <ul className={Styles.tableLine}>
                <li> Extremely Obese </li>
                <li> More than 35 </li>
            </ul>
        </ul>
    )
};