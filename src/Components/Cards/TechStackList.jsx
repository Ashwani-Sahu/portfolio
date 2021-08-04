import React from "react";
import styles from "./TechStackList.module.css";
// import { skills } from "../../portfolio";

export const TechStackList = ({ techStacks }) => {
    // const theme = darkTheme;
    return (
        <div className={styles.tech_stack_div}>
            {techStacks.map((item) => {
                return (
                    <div className={styles.icon_div}>
                        <img src={item.image} alt="Links" />
                        {/* <h4>{item.name}</h4> */}
                    </div>
                );
            })}
        </div>
    );
};
