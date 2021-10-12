import React from 'react'
import expenseTracker from "../images/expense-tracker.png"
import animeSearch from "../images/anime-search.png";
import quiz from "../images/driver's-test.png";
import parisBeauty from "../images/paris-beauty.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";




const Portfolio = () => {
    /* Expense-Tracker */
    const openPopupboxExpenseTracker = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={expenseTracker} alt="Expense tracker Application"/>
            <div className="utilize">
                <h4>React</h4>
                <h4>CSS3</h4>
                <h4>Speechly</h4>
            </div>
            <p>This is an Application of tacking your income and expenses.
                Because of Voice Interface API, you can add transaction without typing.
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            <p>
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            </>
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
            <p>This project is a web application used to look up information about anime, based on the Anime API
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            <p>
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
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
            <p>This is an Application of tacking your income and expenses.
                Because of Voice Interface API, you can add transaction without typing.
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            <p>
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
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

        /* Paris Beauty */
        const openPopupboxParisBeauty = () => {
            const content = (
                <>
            <img className="portfolio-image-popupbox" src={parisBeauty} alt="Expense tracker Application"/>
            <div className="utilize">
                <h4>HTML5</h4>
                <h4>CSS3</h4>
                <h4>JS ES6</h4>
                <h4>GSAP</h4>
            </div>
            <p>This site is for a mock hair salon. It is used GSAP animations and JS animations.
            </p>
            <p>
                <b>view live: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            <p>
                <b>view code: </b><a className="hyper-link" onClick={() => window.open("abcde.com")}>abcde.com</a>
            </p>
            </>
            )
            PopupboxManager.open({content})
            PopupboxManager.update({
                content,
                config: {
                titleBar: {
                    text: "Hair Salon Webpage",
                },
                },
            });
        }

        const popupConfigParisBeauty = {
            titleBar : {
                enable: true,
                text: '',
            },
            fadeIn: true,
            fadeInSpeed: 500
        }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="img-box-wrapper row justify-content-center">
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
                {/*  */}
                    <div className="portfolio-image-box" onClick={openPopupboxParisBeauty}>
                        <img className="portfolio-image" src={parisBeauty} alt="mock hair salon website" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer { ...popupConfigExpenseTracker } />
            <PopupboxContainer { ...popupConfigAnimeSearch } />
            <PopupboxContainer { ...popupConfigQuiz } />
            <PopupboxContainer { ...popupConfigParisBeauty}  />
        </div>
    )
}

export default Portfolio
