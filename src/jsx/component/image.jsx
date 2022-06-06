import { Box } from "@mui/material";

const ImageProps = {
    height: string,
    width: string,
    alt: string,
    title: string,
    backgroundImage: string
    // add more HTML img attributes you need
}

export const Image = (props = ImageProps) => <Box component='img' {...props} />;