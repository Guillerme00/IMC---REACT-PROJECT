

export default () => {
    return (
        <ul className="table">
            <ul className="tableLine">
                <li>Classification</li>
                <li>I.M.C.</li>
            </ul>
            <ul className="tableLine1">
                <li> UnderWeight </li>
                <li> Less than 18,5 </li>
            </ul>
            <ul className="tableLine2">
                <li> Healthy </li>
                <li> 18,5 - 24,9 </li>
            </ul>
            <ul className="tableLine3">
                <li> OverWeight </li>
                <li> 25,0 - 29,9 </li>
            </ul>
            <ul className="tableLine4">
                <li> Obese </li>
                <li> 30,0 - 34,9 </li>
            </ul>
            <ul className="tableLine5">
                <li> Extremely Obese </li>
                <li> More than 35 </li>
            </ul>
        </ul>
    )
};