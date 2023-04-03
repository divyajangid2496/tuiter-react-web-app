import TuitsListItem from "./tuits-list-item";
import {useDispatch, useSelector} from "react-redux";

import React, {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {
    // const tuits = useSelector(state => state.tuits)
    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();

    // on component load, invoke find tuits thunk to fetch tuits and put them in the reducer's store, so we can extract
    // them with useSelector() and render the tuits here
    // The useEffect hook declares a function callback to be invoked when the component first loads.
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <div className="list-group">
            {/* if loading flag is true, then show a loading message while data is stillcoming back from the server*/}
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return(<TuitsListItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitsList;