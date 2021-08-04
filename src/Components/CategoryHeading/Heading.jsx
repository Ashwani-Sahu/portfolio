import React from "react";
import styles from "./Heading.module.css";
import { darkTheme } from "./../../theme";
// import styles from "./Heading.module.css";

export const Heading = ({ title }) => {
    const theme = darkTheme;
    return (
        <div className={styles.heading_div}>
            <h1
                className={styles.heading_text}
                style={{ color: theme.text, marginTop: "10px" }}
            >
                {title}
            </h1>
        </div>
    );
};
