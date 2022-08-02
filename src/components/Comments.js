import React from "react";



function Comments({ commentry }) {
    const { id, reader, title, comment, image } = commentry


    return(
        <div className="comments-div">
            <div key={id} className="comments-list">
                <img src={image} alt={image} />
                <h2>Article Title: {title}</h2>
                <p>Comment: {comment}</p>
                <p>Commentor: {reader}</p>
            </div>
        </div>
    )
}

export default Comments;