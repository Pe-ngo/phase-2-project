import React, { useState } from "react";



function NewCommentForm({ addComment }) {
    const [commentForm, setCommentForm] = useState({
        reader: "",
        title: "", 
        comment: "", 
        image: ""});



    function handleChanges(e) {
        setCommentForm({...commentForm, [e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3002/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reader: commentForm.reader,
            title: commentForm.title,
            comment: commentForm.comment,
            image: commentForm.image,
          }),
        })
          .then((res) => res.json())
          .then((comment) => {
            addComment(comment);
            setCommentForm({ ...commentForm, reader: "", title: "", comment: "", image: "" });
          });
        
    }

    return(
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                type="text"
                name="reader"
                placeholder="Commenter"
                onChange={handleChanges}
                value={commentForm.reader}
                minlength="5"
                autoComplete="off"
                required
            />
            
            <input
                type="text"
                name="title"
                placeholder="Article Title"
                onChange={handleChanges}
                value={commentForm.title}
                minlength="5"
                autoComplete="off"
                required
            />

            <input
                type="text"
                name="comment"
                placeholder="Comment"
                onChange={handleChanges}
                value={commentForm.comment}
                minlength="5"
                autoComplete="off"
                required
            />

            <input
                type="url"
                name="image"
                placeholder="Image"
                onChange={handleChanges}
                value={commentForm.image}
                minlength="5"
                autoComplete="off"
                required
            />

            <input
                type="submit"
                value="Post Comment"
                className="submit-button"
            />
            
        </form>
    ); 
}

export default NewCommentForm;