import React from "react";

import zeroKeywordsFoundImage from "./broke-reddit.png";

const ZeroKeywordsFoundCard = () => {
    return(
        <div className="container">
            <div className="card">
                <img className="errorImage" src={zeroKeywordsFoundImage} alt="No keywords found on the page"/>
                <h3 className="errorText"> No keywords found on the page!</h3>
            </div>
      </div>
    )
}

export default ZeroKeywordsFoundCard;