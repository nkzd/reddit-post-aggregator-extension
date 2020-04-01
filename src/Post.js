import React from "react";

const Post = ({id,subreddit,submittedBy,title,commentsLink,submittedLink, content}) => {

    //post with thumbnail
     if(content && content.includes("thumbs.redditmedia.com") && content.endsWith(".jpg")){
        return(
         <div className="card">
             <div className="upperContainer">
                 <img classname="thumbnail" src={content} alt="thumbnail"/>
                 <div className="textContainer">
                    <h3>
                        {title} 
                    </h3>
                    <span className="subreddit">{subreddit}</span>
                 </div>
             </div>
             <div className="links">
                 <a target="_blank" rel="noopener noreferrer" href={submittedLink}><button>Link</button></a>
                 <a target="_blank" rel="noopener noreferrer" href={commentsLink}><button>Comments</button></a>
             </div>
         </div>
        )
     }
    return(
        <div className="card">
            <h3>
                {title} 
            </h3>
            <span className="subreddit">{subreddit}</span>
            <div className="links">
                <a target="_blank" rel="noopener noreferrer" href={submittedLink}><button>Link</button></a>
                <a target="_blank" rel="noopener noreferrer" href={commentsLink}><button>Comments</button></a>
            </div>
        </div>
    )
}

export default Post;