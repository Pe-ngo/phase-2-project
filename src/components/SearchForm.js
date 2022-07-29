import React, { useState } from "react";


function SearchForm() {
    const [ enterText, setEnterText ] =useState("");

    return (
            <div className="search-form">
                <form className="form-text" onSubmit>
                    <input type="text" placeholder="Search for article"/>
                    <button type="submit">Search</button>
                </form>
            </div>  
    )
}

export default SearchForm;