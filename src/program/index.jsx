import styles from './program.module.css';

export default () => {
    return (
    <>
    <div className={styles.contain}>
        <h1 className={styles.title}>B.M.I. CALCULATOR</h1>
                <div className={styles.input}>
                    <ul className={styles.inputItemLeft}>
                        <li><h2>Enter your weight:</h2></li>
                        <li className={styles.liInput}><input className={styles.InputArea} type="text" placeholder="Weight"/></li>
                    </ul>
                    <ul className={styles.inputItemRight}>
                        <li><h2>Enter your height:</h2></li>
                        <li className={styles.liInput}><input className={styles.InputArea} type="text" placeholder="Height"/></li>
                    </ul>
                </div>
        <h2 className="input2">Your B.M.I. is: <span className="enter"></span></h2>
    </div>
    </>
    )
}