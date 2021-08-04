import React from "react";
import { blogs } from "./../../portfolio";
// import { ProjectCard } from "./../Cards/ProjectCard";
import styles from "./Blogs.module.css";
import { darkTheme } from "./../../theme";
import { Heading } from "./../CategoryHeading/Heading";
import { BlogCard } from "./../Cards/BlogCard";

export const Blogs = () => {
    const theme = darkTheme;
    return (
        <div className={styles.blogs_div_main} style={{ color: theme.text }}>
            <Heading title="Blogs" />
            <div className={styles.blogs_div}>
                {blogs.map((item) => (
                    <BlogCard item={item} />
                ))}
            </div>
            <br />
        </div>
    );
};
