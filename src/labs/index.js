import Nav from "../nav";
import {Routes, Route} from "react-router"
import Assignment6 from "./a6";
import Assignment7 from "./a7";

function Labs() {
    return(
        <div>
            <Nav/>
            {/*<h1>Assignment 6</h1>*/}
            <Routes>
                <Route index element={<Assignment6/>} />
                <Route path="/a6" element={<Assignment6/>} />
                <Route path="/a7" element={<Assignment7 />} />
            </Routes>
        </div>
    );
}
export default Labs;