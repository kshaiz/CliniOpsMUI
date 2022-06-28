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

    const handleExpandClick = (event) => {
        setExpanded(!expanded);
        event.target.innerText = expanded ? 'Show More' : 'Show Less';
    };

    return (
        <>
            <Grid container direction='row' spacing={{xs: 2, md: 6}}>
                <Grid item xs={12} md={2}>
                    <img
                        src={ImgSrc}
                        className='co-image'
                        alt={Name}
                        title={Name}
                        style={{ maxHeight: '152px' }}
                    />
                </Grid>
                <Grid item xs={12} md={10}>
                    <Typography variant="h3" component="h2" className="co-page-heading">
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