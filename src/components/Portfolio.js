import React from 'react'
import expenseTracker from "../images/expense-tracker.png"
import animeSearch from "../images/anime-search.png";
import quiz from "../images/driver's-test.png";
import access from "../images/ScreenShotForAccess.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";




const Portfolio = () => {
    /* Access Elevator */
    const openPopupboxAccess = () => {
        const content = (
            <>
        <img className="portfolio-image-popupbox" src={access} alt="access elevator website"/>
        <div className="utilize">
            <h4>AWS</h4>
            <h4>React</h4>

        </div>
        <p>Created a company website for Access Elevator Ltd. located in Farmingdale, NY. Deployed this React app on AWS.
        </p>
        <p>
            <b>view live: </b><a className="hyper-link" onClick={() => window.open("http://access-elevator-web.s3-website-us-east-1.amazonaws.com/")}>http://access-elevator-web.s3-website-us-east-1.amazonaws.com/</a><br />
        </p>

        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
            titleBar: {
                text: "Access Elevator Webpage",
            },
            },
        });
    }

    const popupConfigAccess = {
        titleBar : {
            enable: true,
            text: '',
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    /* Expense-Tracker */
    const openPopupboxExpenseTracker = () => {
        const content = (
            <div className="popupBox">
            <img className="portfolio-image-popupbox" src={expenseTracker} alt="Expense tracker Application"/>
            <div className="utilize">
                <h4>React</h4>
                <h4>CSS3</h4>
                <h4>Speechly</h4>
            </div>
            <p>This is an Application of tracking your income and expenses. <br />
                Because of Voice Interface API, you can add transactions without typing.
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("https://taku0324.github.io/expense-tracker/")}>https://taku0324.github.io/expense-tracker/</a><br />
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Taku0324/expense-tracker")}>https://github.com/Taku0324/expense-tracker</a>
            </p>
            </div>
        )
        PopupboxManager.open({content})
            PopupboxManager.update({
                content,
                config: {
                titleBar: {
                    text: "Expense Tracker with Voice Interface API",
                },
                },
            });
    }


    const popupConfigExpenseTracker = {
        titleBar: {
            enable: true,
            text: "Expense tracker Application."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    /* Anime Search */
    const openPopupboxAnimeSearch = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={animeSearch} alt="Expense tracker Application"/>
            <div className="utilize">
                <h4>React</h4>
                <h4>Sass</h4>
            </div>
            <p>This project is a web application used to look up information about anime, based on the Anime API.
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("https://taku0324.github.io/anime-search/")}>https://taku0324.github.io/anime-search/</a><br />
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Taku0324/anime-search")}>https://github.com/Taku0324/anime-search</a>
            </p>
            </>
        )
        PopupboxManager.open({content})
            PopupboxManager.update({
            content,
            config: {
                titleBar: {
                    text: "Anime Search Database",
                },
            },
        });
    }

    const popupConfigAnimeSearch = {
        titleBar : {
            enable: true,
            text: ''
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    /* quiz */
    const openPopupboxQuiz = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={quiz} alt="Expense tracker Application"/>
            <div className="utilize">
                <h4>HTML5</h4>
                <h4>CSS3</h4>
                <h4>JS ES6</h4>
            </div>
            <p>This is a quiz game App for practicing Driver's permit test in NY.<br /> The quiz format and passing condition are created same as real permit test. <br />  You must answer 14 questions correctly to pass it.</p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("https://taku0324.github.io/driver-s-permit-test-in-NY/")}>https://taku0324.github.io/driver-s-permit-test-in-NY/</a><br />
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("https://github.com/Taku0324/driver-s-permit-test-in-NY")}>https://github.com/Taku0324/driver-s-permit-test-in-NY</a>
            </p>
            </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
            titleBar: {
                text: "Quiz of Driver's Test in NY",
            },
            },
        });
    }

    const popupConfigQuiz = {
        titleBar : {
            enable: true,
            text: ""
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="img-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxAccess}>
                        <img className="portfolio-image" src={access} alt="mock hair salon website" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/*  */}
                    <div className="portfolio-image-box" onClick={openPopupboxExpenseTracker}>
                        <img className="portfolio-image" src={expenseTracker} alt="Expense tracker Application" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/*  */}
                    <div className="portfolio-image-box" onClick={openPopupboxAnimeSearch}>
                        <img className="portfolio-image" src={animeSearch} alt="Anime Search Application" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/*  */}
                    <div className="portfolio-image-box" onClick={openPopupboxQuiz}>
                        <img className="portfolio-image" src={quiz} alt="Driver's Test Quiz" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer { ...popupConfigExpenseTracker } />
            <PopupboxContainer { ...popupConfigAnimeSearch } />
            <PopupboxContainer { ...popupConfigQuiz } />
            <PopupboxContainer { ...popupConfigAccess}  />
        </div>
    )
}

export default Portfolio
