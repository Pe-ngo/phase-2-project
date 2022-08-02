import React from "react";



function About() {
    return(
        <div className="about-app-container">
            <h1>News App</h1>
                <p className="about-news-app">
                    This App utilizes New York Times API to enhance the accessibility of up-to-date news and articles 24/7. Users can access news and article by the New York Times by typing their topic of interest in the search form on the homepage.
                    Still, users can use the author's name or name of the character in order to search for various news and articles of interest.
                    The app enable users to post comments upon reading an article as well as view comments posted by other users on different articles.
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