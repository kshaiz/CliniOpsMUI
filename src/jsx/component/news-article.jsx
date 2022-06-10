import React, { useState } from "react";
import { Grid, Typography, Link, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const NewsArticle = (props) => {
const [img] = useState(props.img);
const [alt] = useState(props.alt);
const [link] = useState(props.link);
const [title] = useState(props.title);
const [date] = useState(props.date);
    
    return (
        <>
            <Grid item xs={3}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '170px',
                        border: `1px solid ${blueGrey[100]}`,
                        borderRadius: 2
                    }}
                >
                    <img
                        src={img}
                        alt={alt}
                        title={alt}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                </Box>
                <Box mt={1}>
                    <Link
                        href={link} 
                        target="_blank"
                        underline="none"
                        variant="body1"
                        >
                        {title}
                    </Link>
                    <Typography variant="body2">{date}</Typography>
                </Box>
            </Grid>
        </>
    )
};

export default NewsArticle;