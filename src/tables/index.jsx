import Styles from "./tablex.module.css";


export default function Table({ BM }) {

    let activeClass = '';

    if (BM < 18.5) activeClass = Styles.result;
    else if (BM < 25) activeClass = Styles.result;
    else if (BM < 30) activeClass = Styles.result;
    else if (BM < 35) activeClass = Styles.result;
    else if (BM >= 35) activeClass = Styles.result;

    return (
        <ul className={Styles.table}>
            <ul className={Styles.tableLineTop}>
                <li className={Styles.liItem}>Classification</li>
                <li>I.M.C.</li>
            </ul>
            <ul className={`${Styles.tableLine} ${BM < 18.5 ? activeClass : ''}`}>
                <li className={Styles.liItem}> UnderWeight </li>
                <li> Less than 18,5 </li>
            </ul>
            <ul className={`${Styles.tableLine} ${BM >= 18.5 && BM < 25 ? activeClass: ''}`}>
                <li className={Styles.liItem}> Healthy </li>
                <li> 18,5 - 24,9 </li>
            </ul>
            <ul className={`${Styles.tableLine} ${BM >= 25 && BM < 30 ? activeClass: ''}`}>
                <li className={Styles.liItem}> OverWeight </li>
                <li> 25,0 - 29,9 </li>
            </ul>
            <ul className={`${Styles.tableLine} ${BM >= 30 && BM < 35 ? activeClass: ''}`}>
                <li className={Styles.liItem}> Obese </li>
                <li> 30,0 - 34,9 </li>
            </ul>
            <ul className={`${Styles.tableLine} ${BM >= 35 ? activeClass: ''}`}>
                <li className={Styles.liItem}> Extremely Obese </li>
                <li> More than 35 </li>
            </ul>
        </ul>
    )
};