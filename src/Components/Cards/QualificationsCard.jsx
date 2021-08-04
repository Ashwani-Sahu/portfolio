import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { darkTheme } from "./../../theme";
import { NavLink } from "react-router-dom";
import { Button } from "./../Button/Button";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // height: 500,
        background: "#cecece",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const QualificationsCard = ({ item }) => {
    const classes = useStyles();
    const theme = darkTheme;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card
            className={classes.root}
            variant="outlined"
            style={{ background: theme.body }}
        >
            <CardContent>
                {/* <Typography className={classes.title} color="textPrimary"> */}
                <img
                    style={
                        item.organization === "Masai School"
                            ? { width: "70%" }
                            : { width: "50%" }
                    }
                    src={item.logo}
                    alt="Logo"
                />
                <h3>{item.title}</h3>
                {/* </Typography> */}

                <Typography variant="body2" component="h4">
                    {item.organization}
                </Typography>
                <br />
                <Typography className={classes.pos} color="textSecondary">
                    {item.duration}
                </Typography>

                <NavLink
                    to={`//${item.navigate_to}`}
                    target="_blank"
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {/* <Button
                        text="Explore"
                        newTab={true}
                        // href={greeting.resumeLink}
                        theme={theme}
                        // className={styles.portfolio_repo_btn}
                    /> */}
                </NavLink>
            </CardContent>
        </Card>
    );
};
