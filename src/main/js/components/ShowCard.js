import React from "react";

function ShowCard({props}) {
    let {id, title, description} = props;

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default ShowCard;