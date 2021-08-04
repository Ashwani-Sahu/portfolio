import React from "react";
// import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";
// import emoji from "react-easy-emoji";

import { greeting } from "../../portfolio";
// import landingPerson from "../../Assests/Images/landingPerson";
// import codingPerson from "../../Assests/Images/codingPerson";

// import { Fade } from "react-reveal";
import { FeelingProud } from "./FeelingProud";
import styles from "./Greeting.module.css";
import { darkTheme } from "./../../theme";
import { Button } from "./../Button/Button";
import { SocialMedia } from "./../SocialMedia/SocialMedia";
// import { DisplayLottie } from "./DisplayLottie";
import { NavLink } from "react-router-dom";

export const Greeting = () => {
    const theme = darkTheme;
    return (
        // <Fade bottom duration={2000} distance="40px">
        <div className={styles.greet_main} id="greeting">
            <div className={styles.greeting_main}>
                <div
                    className={`${styles.greeting_image_div} ${styles.hide_vector_one}`}
                >
                    <FeelingProud />

                    {/* <DisplayLottie animationData={codingPerson} /> */}
                </div>
                <div className={styles.greeting_text_div}>
                    <div>
                        <img
                            className={`${styles.avatar_main} ${styles.hide_vector_two}`}
                            src="/Images/ashwani.jpg"
                            alt="Avatar"
                        />
                        <h1
                            className={styles.greeting_text}
                            style={{
                                color: theme.text,
                                marginTop: "10px",
                                fontWeight: "bold",
                            }}
                        >
                            {greeting.title}
                        </h1>
                        <h2
                            className={styles.greeting_nickname}
                            style={{ color: theme.text, marginTop: "0px" }}
                        >
                            ( {greeting.post} )
                        </h2>
                        <p
                            className={styles.greeting_text_p}
                            style={{ color: theme.text }}
                        >
                            {greeting.subTitle}
                        </p>
                        <SocialMedia />
                        <div className={styles.portfolio_repo_btn_div}>
                            <Button
                                text="⭐ Rate Me"
                                newTab={true}
                                href={greeting.portfolioRepository}
                                theme={theme}
                                className={styles.portfolio_repo_btn}
                            />
                            <br />

                            <NavLink
                                to="/Documents/Ashwani_CV.pdf"
                                target="_blank"
                                download
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    text="📄 Resume"
                                    newTab={true}
                                    // href={greeting.resumeLink}
                                    theme={theme}
                                    className={styles.portfolio_repo_btn}
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.greeting_image_div} ${styles.hide_vector_two}`}
                >
                    <FeelingProud />

                    {/* <DisplayLottie animationData={codingPerson} /> */}
                </div>
            </div>
        </div>
        // </Fade>
    );
};
