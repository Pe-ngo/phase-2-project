import React, { useState } from "react";


function SearchForm({ searchNews }) {
    const [news, setNews] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        searchNews(news);
    }


    function handleChange(e) {
        setNews(e.target.value);
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