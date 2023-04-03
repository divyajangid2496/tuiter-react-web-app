// import PostHomeList from "../post-home-list";
import TuitsList from "../tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        // <PostHomeList/> A6-home
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList />
        </div>
    )
}

export default HomeComponent;