import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import SearchForm from "./SearchForm";

function NewsContainer() {
    const [articles, setArticles] = useState([]);
    const [info, setInfo] = useState("anything");

    useEffect(() => {
            fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${info}&api-key=i1Fep7nCet9rvbZSFc8FdYzWQpW4q8cG`)
            .then(res => res.json())
            .then((articles) => setArticles(articles.response.docs))
    },[info]);

    

    return (
        <div>
            <div className="display">
                <div className="display-section">
                    <h2>View Articles About {info}</h2>
                    <SearchForm searchNews={(news) => setInfo(news)}/>
                </div>
            </div>

            {articles.map(article => {
                return (
                    <>
                        <NewsList 
                            abstract={article.abstract}
                            main={article.headline.main}
                            original={article.byline.original}
                            lead_paragraph={article.lead_paragraph}
                            news_desk={article.news_desk}
                            section_name={article.section_name}
                            word_count={article.word_count}
                        />
                    </>
                )
            })}
        </div>
    )
  }
  
  export default NewsContainer;