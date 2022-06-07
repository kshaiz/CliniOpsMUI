import React, { useState } from "react";
import { Grid, Card, CardMedia, CardHeader, Typography, Link } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const NewsArticle = (props) => {
    const [img] = useState(props.img);
    const [alt] = useState(props.alt);
    const [link] = useState(props.link);
    const [title] = useState(props.title);
    const [date] = useState(props.date);
    
    return (
        <>
            <Grid item xs={4}>
                <Card variant="outlined">
                    <CardMedia
                        component="img"
                        height="150"
                        image={img}
                        alt={alt}
                        sx={{ borderBottom: `1px solid ${blueGrey[100]}` }}
                    />
                    <CardHeader
                        title={
                        <Link
                            href={link} 
                            target="_blank"
                            underline="none"
                            variant="body1"
                        >{title}</Link>
                        }
                        subheader={
                        <Typography variant="body2">{date}</Typography>
                        }
                    />
                </Card>
            </Grid>
        </>
    )
};

export default NewsArticle;