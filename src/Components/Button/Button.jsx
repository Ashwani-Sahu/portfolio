import React from "react";
import { darkTheme } from "./../../theme";
import styles from "./Button.module.css";

const onMouseEnter = (event, color, bgColor) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
};

export const Button = ({ text, className, href, newTab = true }) => {
    const theme = darkTheme;
    return (
        <div className={className}>
            <a
                className={styles.main_button}
                href={href}
                target={newTab && "_blank"}
                style={{
                    color: theme.body,
                    backgroundColor: theme.text,
                    border: `solid 1px ${theme.text}`,
                }}
                onMouseEnter={(event) =>
                    onMouseEnter(event, theme.text, theme.body)
                }
                onMouseOut={(event) =>
                    onMouseOut(event, theme.body, theme.text)
                }
            >
                {text}
            </a>
        </div>
    );
};
