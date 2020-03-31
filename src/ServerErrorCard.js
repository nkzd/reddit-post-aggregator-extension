import React from "react";
import errorImage from "./error-reddit.jpg";

const ServerErrorCard = () => {
    return (
        <div className="container">
          <div className="card">
            <img className="errorImage" src={errorImage} alt="Server not responding"/>
            <h3 className="errorText">Server not respoding!</h3>
          </div>
        </div>
      )
}

export default ServerErrorCard;