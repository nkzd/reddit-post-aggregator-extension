import React from "react";

import ZeroPostsFoundimage from "./broke-reddit.png";

const ZeroPostsFoundCard = () => {
    return(
        <div className="container">
            <div className="card">
                <img className="errorImage" src={ZeroPostsFoundimage} alt="No relevant reddit posts found!"/>
                <h3 className="errorText"> No relevant reddit posts found!</h3>
            </div>
      </div>
    )
}

export default ZeroPostsFoundCard;