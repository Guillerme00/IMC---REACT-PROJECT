import { use, useEffect, useState } from 'react';
import styles from './program.module.css';

export default function Program({ setBM }) {
    const [userWeight, getuserWeight] = useState(0);
    const [userHeight, getuserHeight] = useState(0);

    const BMI = () => {
        const weight = parseFloat(userWeight);
        const height = parseFloat(userHeight);
        if (!weight || !height) return 0;
        return (weight/((height/100)**2)).toFixed(2);
    }

    const BM = BMI()


    useEffect(() => {
        setBM(BM);
    }, [BM, setBM]);

    return (
    <>
    <div className={styles.contain}>
        <h1 className={styles.title}>B.M.I. CALCULATOR</h1>
                <div className={styles.input}>
                    <ul className={styles.inputItemLeft}>
                        <li><h2>Enter your weight:</h2></li>
                        <li className={styles.liInput}><input className={styles.InputArea} type="text" placeholder="Weight (Kg)" onChange={(e) => getuserWeight(e.target.value)}/></li>
                    </ul>
                    <ul className={styles.inputItemRight}>
                        <li><h2>Enter your height:</h2></li>
                        <li className={styles.liInput}><input className={styles.InputArea} type="text" placeholder="Height (Meters)" onChange={(e) => getuserHeight(e.target.value)}/></li>
                    </ul>
                </div>
        <h2 className="input2">Your B.M.I. is: <span className="enter">{BMI()}</span></h2>
    </div>
    </>
    )
}