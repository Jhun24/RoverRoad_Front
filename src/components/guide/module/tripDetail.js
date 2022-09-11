import React from "react";
import ThumbNail from '../../image/asdf.jpg';

let TripDetail = (props)=>{
    return(
        <div className="TripThumbnail">
            <img src={props.image}/>
            <div className="text-box">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default TripDetail;