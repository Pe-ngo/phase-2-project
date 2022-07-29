import React from "react";


function NewsList({ abstract, main, 
                    original, lead_paragraph, 
                    news_desk, section_name, 
                    web_url,word_count, }) {

    return (
            <div className="news-app">
                <div className="new-list">
                    <h2><a href={web_url}>{main}</a></h2>
                    <h3>{abstract}</h3>
                    <p>{lead_paragraph}</p>

                    <ul>
                        <li><span>Author:</span>  {original}</li>
                        <li><span>News Desk:</span>  {news_desk}</li>
                        <li><span>Section Name:</span>  {section_name}</li>
                        <li><span>Word Count:</span>  {word_count}</li>
                    </ul>
                </div>
            </div>   
    )
}

export default NewsList;