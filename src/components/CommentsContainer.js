import React, { useState, useEffect } from "react";
import Comments from "./Comments";

function CommentsContainer() {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3002/comments")
        .then((res) => res.json())
        .then((comments) => setComments(comments))
    }, [])

    const commentList = comments.map((commentry) => {

        return <Comments key= {commentry.id} commentry={commentry}/>
      });
    
      return (
        <div className="comments-container">
          {commentList}
        </div>
      );
    }

export default CommentsContainer;