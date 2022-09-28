import { Link } from "react-router-dom";

function Btn({btnClass, link, btnText}) {
    return ( 

        <Link  className={btnClass} to={link}><span>{btnText}</span></Link>

     );
}

export default Btn;