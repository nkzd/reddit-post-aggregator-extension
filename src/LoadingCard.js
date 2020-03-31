import React from "react";
import { Facebook } from 'react-content-loader';

const LoadingCard = () => {
    return (
        <div className="container">
          <div className="card">
                <div className="loadingContainer">
                    <Facebook />
                </div>
          </div>
          <div className="card">
            <div className="loadingContainer">
                    <Facebook />
              </div>
          </div>
        </div>
    )   
}

export default LoadingCard;