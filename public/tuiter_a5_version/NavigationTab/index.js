import tabs from "./tabs.js";
import NavTabItem from "./NavTabItem.js";

const NavigationTab = (active) => {
    return(`
        <ul class="nav mb-2 nav-tabs mt-2">     
            ${tabs.map(tab => {
                return(`
                    ${NavTabItem(tab, active === tab.name ? "active" : "")}
                `)
            }).join('')}
        </ul>
    `)
}

export default NavigationTab;

// used for test only
// $('#wd-nav-tab').append(`
//     ${NavigationTab("for you")}
// `)