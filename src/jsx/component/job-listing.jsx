import React, { useState } from "react";
import { Box, Container, Grid, Typography, Chip, Stack, Button } from "@mui/material";
import { LocationOnOutlined } from '@mui/icons-material';
import { blueGrey } from "@mui/material/colors";

const JobListingPage = (props) => {
    const [color] = useState(props.color);
    const [title] = useState(props.title);
    const [summary] = useState(props.summary);
    const [locations] = useState(props.location);
    
    return (
        <>
            <Box
                sx={{ py: 10 }}
                style={{
                    backgroundColor: color[50],
                    borderBottom: '8px solid',
                    borderImageSlice: 1,
                    borderWidth: '8px',
                    borderImageSource: `linear-gradient(to left, ${color[50]}, ${color[100]}, ${color[50]})`
                }}>
                <Container>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h1" component="h1">
                            {title}
                        </Typography>
                        <Button variant="contained" size="large">Apply for this Job</Button>
                    </Stack>
                    <Typography variant="subtitle1" sx={{ mt: 1 }}>
                        {summary}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        {locations.map((location) => (
                            <Chip key={location} color="secondary" size="small" icon={<LocationOnOutlined />} label={location} sx={{ backgroundColor: blueGrey[500] }} />
                        ))}
                    </Stack>

                </Container>
            </Box>
            <Container>
                <Grid container spacing={5} direction='column' sx={{ py: 10 }}>
                    {props.children}
                </Grid>
                <Box sx={{ pb: 10, mt: -5 }}>
                    <Button variant="contained" size="large">Apply for this Job</Button>
                </Box>
            </Container>
        </>
    )
};

export { JobListingPage};