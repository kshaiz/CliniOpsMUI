import React, { useState } from "react";
import { HashLink as RouterLink } from 'react-router-hash-link';
import { Stack, Typography, Box, Button, Link } from "@mui/material";
import { common } from "@mui/material/colors";

const HeroTile = (props) => {
  const [heading] = useState(props.heading);
  const [subheading] = useState(props.subheading);
    
  return (
    <>
      <Stack spacing={.25} sx={{ backgroundColor: 'rgba(4,45,67,.15)', padding: '20px 0', borderRadius: 1, textAlign: 'center', width: '150px' }}>
        <Typography variant="h1" sx={{ fontWeight: 500, opacity: .75 }}>{heading}</Typography>
        <Typography variant="body2" sx={{ fontWeight: 500, opacity: .75 }}>{subheading}</Typography>
      </Stack>
    </>
  )
};

const InnovationTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [label] = useState(props.label);
    
  return (
    <>
      <Stack
        direction='row'
        alignItems='center'
        spacing={1}
        sx={{ width: '350px' }}
      >
        <img
          src={imgSrc}
          alt='Icon for Innovation Category'
          title={label}
          style={{ height: '80px', minWidth: '80px' }}
        />
        <Typography variant="body1">{label}</Typography>
      </Stack>
    </>
  )
};

const ProductTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [heading] = useState(props.heading);
  const [summary] = useState(props.summary);
  const [link] = useState(props.link);
    
  return (
    <>
      <Stack
        direction="column"
        alignItems='center'
        spacing={1}
        p={3}
        sx={{
          width: '350px',
          height: '100%',
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor: common.white,
          boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)'
        }}
      >
        <Box>
          <img
            src={imgSrc}
            alt='Product Logo'
            title={heading}
            style={{ height: '100px', minWidth: '90px' }}
          />
        </Box>
        <Typography variant="h3">{heading}</Typography>
        <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>
          {summary}
        </Typography>
        <Box sx={{ pt: 2 }}>
          <Button to={link} component={RouterLink}>Learn More</Button>
        </Box>
      </Stack>
    </>
  )
};

const TechnologyTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [heading] = useState(props.heading);
  const [summary] = useState(props.summary);
    
  return (
    <>
      <Stack direction="row" alignItems='center' spacing={1} sx={{ width: '350px' }}>
        <img
          src={imgSrc}
          alt='Icon for Technology'
          title={summary}
          style={{ height: '80px', minWidth: '80px' }}
        />
        <Box>
          <Typography variant="h4">{heading}</Typography>
          <Typography variant="body1">{summary}</Typography>
        </Box>
      </Stack>
    </>
  )
};

const TestimonialTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [organization] = useState(props.organization);
  const [quote] = useState(props.quote);
  const [name] = useState(props.name);
  const [position] = useState(props.position);
    
  return (
    <>
      <Stack
        direction='column'
        alignItems='center'
        spacing={1}
        p={3}
        sx={{
          width: '350px',
          borderRadius: 2,
          textAlign: 'center',
          height: '100%',
          backgroundColor: common.white,
          boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px'
          }}
        >
          <img
            src={imgSrc}
            className='co-image'
            alt='Image for testimonial provider'
            title={organization}
            style={{ minWidth: '80%' }}
          />
        </Box>
        <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}><em>"{quote}"</em></Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="body1"><strong>{name}</strong></Typography>
          <Typography variant="body2">{position}, {organization}</Typography>
        </Box>
      </Stack>
    </>
  )
};

const NewsTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [source] = useState(props.source);
  const [summary] = useState(props.summary);
  const [link] = useState(props.link);
    
  return (
    <>
      <Stack
        direction="column"
        alignItems='center'
        spacing={1}
        p={3}
        sx={{
            width: '350px',
            borderRadius: 2,
            textAlign: 'center',
            height: '100%',
            backgroundColor: common.white,
            boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '120px'
            }}
          >
            <img
              src={`${imgSrc}`}
              alt='Image for News Source'
              title={source}
              style={{ height: '100px', minWidth: '90px' }}
            />
          </Box>
          <Typography variant="body1" sx={{ lineHeight: '24px', pt: 1 }}>{summary}
            
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Link href={link} target="_blank" underline="hover">LEARN MORE</Link>
          </Box>
        </Stack>
    </>
  )
};

const AwardTile = (props) => {
  const [imgSrc] = useState(props.imgSrc);
  const [source] = useState(props.source);
  const [summary] = useState(props.summary);
  const [link] = useState(props.link);
    
  return (
    <>
      <Link
        underline='none'
        href={link}
        target='_blank'
        sx={{ height: '100%' }}
      >
        <Stack
          direction="column"
          alignItems='center'
          spacing={1}
          pt={1}
          pb={3}
          sx={{
            width: '260px',
            borderRadius: 2,
            textAlign: 'center',
            height: '100%',
            backgroundColor: common.white,
            boxShadow: '0 30px 60px -30px rgb(0 0 0 / 30%), 0 30px 60px -30px rgb(0 0 0 / 25%)'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '120px'
            }}
          >
            <img
              src={imgSrc}
              alt='Logo for Award Source'
              title={source}
              style={{ maxWidth: '240px', maxHeight: '120px' }}
            />
          </Box>
          <Typography variant="body1" sx={{ lineHeight: '24px'}}>{summary}</Typography>
        </Stack>
      </Link>
    </>
  )
};

export { HeroTile, InnovationTile, ProductTile, TechnologyTile, TestimonialTile, NewsTile, AwardTile };