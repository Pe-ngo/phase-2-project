import React, { useState } from "react";


function SearchForm() {
    const [ enterText, setEnterText ] =useState("");


    function handleSubmit(e) {
        e.preventDefault()
    }


    function handleChange(e) {
        setEnterText({ ...enterText, [e.target.name]:e.target.value});
      }

    return (
            <div className="search-form">
                <form className="form-text" onSubmit={handleSubmit}>
                    <input type="text" 
                        placeholder="e.g election"
                        onChange={handleChange}
                    />
                    <button type="submit" className="submit-btn">Search</button>
                </form>
            </div>  
    )
}

export default SearchForm;