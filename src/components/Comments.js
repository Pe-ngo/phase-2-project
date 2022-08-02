import React from "react";



function Comments({ commentry }) {
    const { id, reader, title, comment, image } = commentry


    return(
        <div className="comments-div">
            <div key={id} className="comments-list">
                <img className="image"src={image} alt={image} />
                <h2> {title}</h2>
                <p><span>Comment:</span> {comment}</p>
                <p><span>Commenter:</span> {reader}</p>
            </div>
        </div>
    )
}

export default Comments;