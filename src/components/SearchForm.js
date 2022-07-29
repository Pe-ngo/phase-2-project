import React, { useState } from "react";


function SearchForm() {
    const [ info, setInfo ] =useState("");

    return (
            <div>
                <form>
                    <input type="text" placeholder="Search for news"/>
                    <button type="submit">Search</button>
                </form>
            </div>  
    )
}

export default SearchForm;