import React from "react";
import {useLocation} from "react-router";
import NavigationSidebarItem from "./navigation-sidebar-item";
import sidebars from "./sidebars.json";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    // // Convert all parameters into an object deconstructor and provide default value
    // {
    //     active = "explore"
    // }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    // React.js function components can only return a single HTML element, can use <></> to replace
    return(
        // The HTML class attribute is commonly used to associate CSS transformation rules to an HTML element.
        // In JavaScript class is a keyword so we can't use it, use className instead
        <div className="list-group sticky-top">
            <Link to="/" className="list-group-item">Labs</Link>
            {
                sidebars.map(sidebar => {
                return(
                    // If the path is /tuiter, then active home link
                    <NavigationSidebarItem key={sidebar._id} sidebar={sidebar} active={active ? active : "home"}/>)
                })
            }
            <div className="d-grid mt-2">
                <button className="btn btn-primary btn-block rounded-pill">Tuit</button>
            </div>
        </div>
    );
}

export default NavigationSidebar;