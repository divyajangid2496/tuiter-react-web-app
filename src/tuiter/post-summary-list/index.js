import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-list-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = (
    {
        sidebar = false
    }
) => {
    // const postsArray = useSelector((state) => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(post => <PostSummaryItem key={post._id} post={post} sidebar={sidebar}/> )}
        </ul>
    );
};
export default PostSummaryList;