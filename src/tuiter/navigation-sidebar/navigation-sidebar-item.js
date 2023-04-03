import {Link} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import StackIcon from "./stack-icon";

const NavigationSideBarItem = ({
    sidebar = {
        stack: false,
        iconMain: "fa-brands fa-twitter",
        iconSub: "",
        name: ""
    },
    active = ""
}) => {
    return(
        // If the sidebar is the twitter, it does not have the name and redirect it to /home route.
        <Link to={`/tuiter/${!sidebar.name ? "home" : sidebar.name}`}
              className={`list-group-item ${sidebar.name && active === sidebar.name?'active':''}`}>
            <div className="row">
                <div className="col-xl-2">
                    {/* If sidebar icon is not stack, simply call FontAwesomeIcon function */}
                    {!sidebar.stack && <FontAwesomeIcon icon={sidebar.iconMain}/>}
                    {/* If sidebar icon is stack, send main icon and sub icon to StackIcon where two icon will be layered up */}
                    {sidebar.stack && <StackIcon iconMain={sidebar.iconMain} iconSub={sidebar.iconSub}/>}
                </div>
                <div className="d-none d-xl-inline col-xl-10">
                    {sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </Link>
    )
}

export default NavigationSideBarItem;