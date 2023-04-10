import {Link} from "react-router-dom";

function Nav() {
    return(
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/a6">Assignment 6</Link> |
            <Link to="/a7">Assignment 7</Link> |
            <Link to="/tuiter">Assignment 9</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav;