import React from "react";



function About() {
    return(
        <div className="about-app-container">
            <h1>News App</h1>
                <p className="about-news-app">
                    This App utilizes New York Times API to enhance the accessibility of up-to-date articles 24/7. Users can access <br/> any article by the New York Times by typing their topic of interest in the search form on the homepage.
                    <br/> Still, users can use the author's name or the name of the character in order to search for the news of interest.<br/>
                    The app allow users to post comments reading any article as well as view comments posted by other users about particular articles.
                </p>
                
                    <img
                        className="about-news-image"
                        src="https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="About"
                    />
      </div>
    )
}

export default About;