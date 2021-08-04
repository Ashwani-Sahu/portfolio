import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "./../Button/Button";
import { darkTheme } from "./../../theme";
import styles from "./BlogCard.module.css";
import BookIcon from "@material-ui/icons/Book";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginBottom: "5%",
        background: "rgb(247, 247, 247)",
        cursor: "pointer",
    },
    media: {
        height: 0,
        // padding: "20% 20%",
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export function BlogCard({ item }) {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
    const theme = darkTheme;

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card
            className={`${classes.root} ${styles.blog_card_main}`}
            style={{ color: theme.text }}
        >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {item.symbol}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <BookIcon />
                    </IconButton>
                }
                title={item.name}
                subheader={item.date}
            />
            <div style={{ padding: "2% 2%" }}>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Photo"
                />
            </div>
            <CardContent
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography variant="body2" color="textPrimary" component="p">
                    {item.description}
                </Typography>
                <br />
                <Button text="Know More" href={item?.link} />
            </CardContent>
            <br />
        </Card>
    );
}
