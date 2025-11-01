export default () => {
    return (
    <>
        <h1 className="title">B.M.I. CALCULATOR</h1>
            <div className="input">
                <ul className="inputItem">
                    <li><h2>Enter your weight:</h2></li>
                    <li><input type="text" placeholder="Weight"/></li>
                </ul>
                <ul className="inputItem">
                    <li><h2>Enter your height:</h2></li>
                    <li><input type="text" placeholder="Height"/></li>
                </ul>
            </div>
        <h2 className="input2">Your B.M.I. is <span className="enter"></span></h2>
    </>
    )
}