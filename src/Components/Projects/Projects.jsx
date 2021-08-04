import React from "react";
import { projectLinks } from "./../../portfolio";
import { ProjectCard } from "./../Cards/ProjectCard";
import styles from "./Projects.module.css";
import { darkTheme } from "./../../theme";
import { Heading } from "./../CategoryHeading/Heading";

export const Projects = () => {
    const theme = darkTheme;
    return (
        <div className={styles.projects_div_main} style={{ color: theme.text }}>
            <Heading title="Projects" />
            <div className={styles.projects_div}>
                {projectLinks.map((item) => (
                    <ProjectCard item={item} />
                ))}
            </div>
            <br />
            <br />
            <br />
            <div className={styles.github_div}>
                <div className={styles.hideme}>
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api?username=Ashwani-Sahu&show_icons=true&locale=en"
                        alt="Ashwani-Sahu"
                    />
                </div>

                <div>
                    <img
                        align="center"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ashwani-Sahu"
                        alt="Ashwani-Sahu"
                    />
                </div>
            </div>
            <br />
        </div>
    );
};
