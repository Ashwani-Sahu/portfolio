import React from "react";
import styles from "./SocialMedia.module.css";
// import { darkTheme } from "./../../theme";
import { socialMediaLinks } from "../../portfolio";
// import styled from "styled-components";
// import "./SocialMedia.css";

export const SocialMedia = () => {
    // const theme = darkTheme;
    return (
        <div className={styles.social_media_div}>
            {socialMediaLinks.map((item) => {
                return (
                    <a
                        href={item.link}
                        className={styles.icon_button}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={item.logo} alt="Links" />

                        {/* <span></span> */}
                    </a>
                );
            })}
        </div>
    );
};
