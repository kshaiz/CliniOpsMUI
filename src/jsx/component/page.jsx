import React, { useState } from "react";
import { Box, Container, Divider, Grid } from "@mui/material";

const PageHero = (props) => {
    const [color] = useState(props.color);
    
    return (
        <>
            <Box
                sx={{ pb: 10, pt: `calc(72px + 80px)` }}
                style={{
                    backgroundColor: color[50],
                    borderBottom: '8px solid',
                    borderImageSlice: 1,
                    borderWidth: '8px',
                    borderImageSource: `linear-gradient(to left, ${color[50]}, ${color[100]}, ${color[50]})`
                }}>
                <Container>
                    {props.children}
                </Container>
            </Box>
        </>
    )
};

const PageContent = (props) => {
    const [color] = useState(props.color);
    
    return (
        <>
            <Container>
                <Grid container spacing={10} direction='column' sx={{ py: 10 }}>
                    {props.children}
                </Grid>
            </Container>
        </>
    )
};

export { PageHero, PageContent};