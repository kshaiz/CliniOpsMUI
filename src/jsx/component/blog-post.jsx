import React, { useState } from "react";
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Grid, Typography, Link, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const BlogPost = (props) => {
const [img] = useState(props.img);
const [link] = useState(props.link);
const [title] = useState(props.title);
const [date] = useState(props.date);
    
    return (
        <>
            <Grid item xs={4}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '150px',
                        border: `1px solid ${blueGrey[100]}`,
                        borderRadius: 2,
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                />
                <Box mt={1}>
                    <Link
                        to={link}
                        component={RouterLink}
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

export default BlogPost;