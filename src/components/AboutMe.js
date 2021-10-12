import React from 'react'
import author from "../me.JPG";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={ author } alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <div className="about-introduce">
                        <p>
                            I'm a self-taught front-end-developer with a passion for making websites and web applications.
                        </p>
                        <p>
                            I enjoy coding every day and looking for an opportunity to apply on a development team.
                        </p>
                        <p>
                            Technology has always been a major interest in my life. In my free time I enjoy playing video games and spending time with my family.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
