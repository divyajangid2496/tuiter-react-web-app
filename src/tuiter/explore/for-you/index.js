import PostSummaryList from "../../post-summary-list";
import React from "react";

const ForYou = () => {
    return (
        <div>
            <div className="position-relative mb-2">
                <img src="/images/spacex-starship-mk1.webp" className="w-100" alt={"title"}/>
                <h1 className="position-absolute wd-nudge-up text-white">SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </div>
    )
}

export default ForYou;