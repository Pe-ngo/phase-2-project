import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import NewCommentForm from "./NewCommentForm";

function CommentsContainer() {
    const [comments, setComments] = useState([]);
    const [showForm, setShowForm] = useState(false);



    function toggleForm() {
        setShowForm((showForm) => !showForm);
    }

    function addComment(newComment) {
        setComments([...comments, newComment]);
    }

    useEffect(() => {
        fetch("https://shrouded-refuge-64630.herokuapp.com/commentary")
        .then((res) => res.json())
        .then((comments) => setComments(comments))
    }, [])

    const commentList = comments.map((commentry) => {

        return <Comments key= {commentry.id} commentry={commentry}/>
      });
    
      return (
        <div className="comments-container">
            <button onClick={toggleForm} className="show-form">
                {showForm ? "Hide Form" : "Show Form"}
            </button>
            {showForm ? <NewCommentForm addComment={addComment} /> : !showForm}
            {commentList}
        </div>
      );
    }

export default CommentsContainer;