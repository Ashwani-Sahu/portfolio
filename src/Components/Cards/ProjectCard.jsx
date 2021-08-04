import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Button } from "../Button/Button";
import styles from "./ProjectCard.module.css";
import { TechStackList } from "./TechStackList";

// const useStyles = makeStyles({
//     root: {
//         maxWidth: 375,
//         // height: 350,
//         marginTop: 10,
//         padding: "0.5% 0.5%",
//         backgroundColor: "rgb(252, 246, 246)",
//     },
// });

export const ProjectCard = ({ item }) => {
    // const classes = useStyles();

    return (
        <Card className={styles.projects_card_main}>
            <CardActionArea style={{ backgroundColor: "transparent" }}>
                <CardMedia
                    component="img"
                    alt="Design Image"
                    height="180"
                    image={item?.image}
                    title={item?.title}
                />
                <CardContent style={{ backgroundColor: "transparent" }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                            // fontFamily: "Google Sans Bold",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: "bold",
                            marginTop: 0,
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{
                            color: "black",
                            fontFamily: "Open Sans, sans-serif",
                        }}
                    >
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <TechStackList techStacks={item.tech_stack} />
            <CardActions
                style={{
                    display: " flex",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                }}
            >
                <Button
                    text="Project"
                    href={item?.live_link}
                    className={styles.project_card_button}
                />

                <Button
                    text="GitHub"
                    href={item?.repo_link}
                    className={styles.project_card_button}
                />
                <Button
                    text="Demo"
                    href={item?.video_link}
                    className={styles.project_card_button}
                />
            </CardActions>
        </Card>
    );
};
