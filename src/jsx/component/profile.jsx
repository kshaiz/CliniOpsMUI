import React from 'react';
import { Grid, Typography, Button, Collapse } from "@mui/material";

const CustomProfile = ({
    ImgSrc,
    Name,
    Position,
    Summary,
    FullContent
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        // console.log(event.target);
    };

    return (
        <>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <img
                        src={ImgSrc}
                        className='co-image'
                        alt={Name}
                        title={Name}
                        style={{ maxHeight: '100%' }}
                    />
                </Grid>
                <Grid item xs={10} sx={{ pl: 6 }}>
                    <Typography variant="h3" component="h2">
                        {Name}{Position}
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        {Summary}
                    </Typography>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        {FullContent}
                    </Collapse>
                    <Button expand={{expanded}} onClick={handleExpandClick} sx={{ mt: 1, ml: -1 }}>Show More</Button>
                </Grid>
            </Grid>
        </>
    )
};

export default CustomProfile;