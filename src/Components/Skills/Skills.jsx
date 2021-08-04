import React from "react";
import styles from "./Skills.module.css";
import { darkTheme } from "./../../theme";
import { frontend_skills } from "../../portfolio";
import { backend_skills } from "../../portfolio";
import { Heading } from "../CategoryHeading/Heading";
// import styled from "styled-components";
// import "./SocialMedia.css";

export const Skills = () => {
    const theme = darkTheme;
    return (
        <div className={styles.skill_div_main} style={{ color: theme.text }}>
            <Heading title="Skills" />
            <div className={styles.skill_div}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // border: "solid 1px red",
                    }}
                >
                    <h3 style={{ color: theme.text }}>Frontend</h3>
                    {frontend_skills.map((item) => {
                        return (
                            <div style={{ marginBottom: "10%" }}>
                                <div className={styles.icon_div}>
                                    <img src={item.image} alt="Links" />
                                    <div className={styles.icon_description}>
                                        {item.name}
                                    </div>
                                    {/* <h4>{item.name}</h4> */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // border: "solid 1px red",
                    }}
                >
                    <h3 style={{ color: theme.text }}>Backend</h3>
                    {backend_skills.map((item) => {
                        return (
                            <div style={{ marginBottom: "10%" }}>
                                <div className={styles.icon_div}>
                                    <img src={item.image} alt="Links" />
                                    <div className={styles.icon_description}>
                                        {item.name}
                                    </div>
                                    {/* <h4>{item.name}</h4> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
