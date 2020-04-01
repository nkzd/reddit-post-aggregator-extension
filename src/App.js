/*global chrome*/
import React, {useEffect, useState} from 'react';
import Post from "./Post";
import ServerErrorCard from "./ServerErrorCard"
import ZeroPostsFoundCard from "./ZeroPostsFoundCard";
import ZeroKeywordsFoundCard from "./ZeroKeywordsFoundCard";
import LoadingCard from "./LoadingCard";
const App = (props) => {
  const [redditPosts,setRedditPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [zeroKeywordsFound, setZeroKeywordsFound] = useState(false);

  useEffect(()=>{
    
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
      chrome.tabs.sendMessage(tabs[0].id, {type: "getKeywords"}, (payload) =>{
          setLoading(true);
          console.log("Keywords for this page: " + payload);
          if(payload.length >= 3 && payload.length <= 5){
            fetch(process.env.REACT_APP_API_URL,{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
              })
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Status not OK');
                }
              })
              .then(data => {
                console.log(data);
                setRedditPosts(data);
                setLoading(false);
              })
              .catch(error => {
                console.log(error);
                setServerError(true);
                setLoading(false);
              });
          }else{
            setZeroKeywordsFound(true);
            setLoading(false);
          }
        
      });
    });
  },[])

  if(loading)
    return <LoadingCard/>

  if(zeroKeywordsFound)
    return <ZeroKeywordsFoundCard/>

  if(serverError)
    return <ServerErrorCard/>
  
  if(redditPosts.length===0)
    return <ZeroPostsFoundCard />
    
  
  return(
    <div className="container">
      {
        redditPosts.map((post) => {
          return <Post {...post}/>
        })
      }
    </div>
  )
}

export default App;
