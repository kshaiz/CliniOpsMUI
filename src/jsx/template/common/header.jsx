import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Box, Container, Grid, Divider, Link, Button, Popper, Stack, Collapse } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { blueGrey, common } from '@mui/material/colors';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import ImgCliniOps from '../../../img/CliniOps.svg';

import RouterList from '../../router';

const template = () => {
  const [anchorService, setAnchorService] = React.useState(null);
  const handleOpenService = (event) => {
    if (anchorService !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorService(event.currentTarget);
      document.querySelector('#co-hdr-menu-service').classList.add('hover');
    }
  }
  const handleCloseService = () => {
    document.querySelector('#co-hdr-menu-service').classList.remove('hover');
    setAnchorService(null);
  }

  const [anchorAbout, setAnchorAbout] = React.useState(null);
  const handleOpenAbout = (event) => {
    if (anchorAbout !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorAbout(event.currentTarget);
      document.querySelector('#co-hdr-menu-about').classList.add('hover');
    }
  }
  const handleCloseAbout = () => {
    document.querySelector('#co-hdr-menu-about').classList.remove('hover');
    setAnchorAbout(null);
  }

  const [anchorMedia, setAnchorMedia] = React.useState(null);
  const handleOpenMedia = (event) => {
    if (anchorMedia !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorMedia(event.currentTarget);
      document.querySelector('#co-hdr-menu-media').classList.add('hover');
    }
  }
  const handleCloseMedia = () => {
    document.querySelector('#co-hdr-menu-media').classList.remove('hover');
    setAnchorMedia(null);
  }

  const [anchorMobile, setAnchorMobile] = React.useState(null);
  const handleOpenMobile = (event) => {
    if (anchorMobile !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorMobile(event.currentTarget);
      document.querySelector('#co-hdr-menu-mobile').classList.add('hover');
    }
  }
  const handleCloseMobile = () => {
    document.querySelector('#co-hdr-menu-mobile').classList.remove('hover');
    setAnchorMobile(null);
  }

  const handleCloseSubMenu = () => {
    handleCloseService();
    handleCloseAbout();
    handleCloseMedia();
    handleCloseMobile();
  }

  const [expandedAbout, setAboutExpanded] = React.useState(false);

  const handleExpandAbout = (event) => {
    setMediaExpanded(false);
    setAboutExpanded(!expandedAbout);
    // event.target.innerText = expandedAbout ? 'Show More' : 'Show Less';
  };

  const [expandedMedia, setMediaExpanded] = React.useState(false);

  const handleExpandMedia = (event) => {
    setAboutExpanded(false);
    setMediaExpanded(!expandedMedia);
    // event.target.innerText = expandedAbout ? 'Show More' : 'Show Less';
  };

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: common.white, zIndex: 10 }}>
        <Container>
          <Grid container spacing={0} alignItems='center' justifyContent='stretch' direction="row" sx={{ padding: { xs: 1, md: 0 } }}>
            <Grid item sx={{ ml: -1 }}>
              <Link variant="link" to={RouterList.home._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>
                <Box
                  style={{
                    width: '170px',
                    height: '46px',
                    backgroundImage: `url(${ImgCliniOps})`,
                    backgroundSize: 'contain'
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={true} />
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.product._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Products</Link>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleOpenService} id="co-hdr-menu-service">
                Services
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
              <Popper
                placement="bottom-start"
                anchorEl={anchorService}
                open={Boolean(anchorService)}
                onClose={handleCloseService}
                onMouseLeave={handleCloseService}
              >
                <Stack sx={{ backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.service.studysetup} component={RouterLink} onClick={handleCloseService}>Study Setup</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.service.clinicaldatamanagement} component={RouterLink} onClick={handleCloseService}>Clinical Data Management</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.service.biostatisticprogramming} component={RouterLink} onClick={handleCloseService}>Biostatistics &amp; Statistical Programming</Link>
                </Stack>
              </Popper>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" href="#" onClick={handleOpenAbout} onMouseOver={handleOpenAbout} id="co-hdr-menu-about">
                About
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
              <Popper
                placement="bottom-start"
                anchorEl={anchorAbout}
                open={Boolean(anchorAbout)}
                onClose={handleCloseAbout}
                onMouseLeave={handleCloseAbout}
              >
                <Stack sx={{ backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.mission} component={RouterLink} onClick={handleCloseAbout}>Mission</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.leadershipteam} component={RouterLink} onClick={handleCloseAbout}>Leadership Team</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.career} component={RouterLink} onClick={handleCloseAbout}>Careers</Link>
                </Stack>
              </Popper>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" href="#" onClick={handleOpenMedia} onMouseOver={handleOpenMedia} id="co-hdr-menu-media">
                Media
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
              <Popper
                placement="bottom-start"
                anchorEl={anchorMedia}
                open={Boolean(anchorMedia)}
                onClose={handleCloseMedia}
                onMouseLeave={handleCloseMedia}
              >
                <Stack sx={{ backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.newsroom} component={RouterLink} onClick={handleCloseMedia}>Newsroom</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.blog} component={RouterLink} onClick={handleCloseMedia}>Blogs</Link>
                </Stack>
              </Popper>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.contact._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Contact</Link>
            </Grid>
            <Grid item sx={{ mr: -1, display: { xs: 'none', md: 'block' } }}>
              <Button variant="contained" style={{ background: '#03a9f4' }} to={RouterList.contact.demo} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Request Demo</Button>
            </Grid>
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <MenuOutlinedIcon fontSize="large" onClick={handleOpenMobile} onMouseOver={handleOpenMobile} id="co-hdr-menu-mobile" />
              <Popper
                placement="bottom-start"
                anchorEl={anchorMobile}
                open={Boolean(anchorMobile)}
                onClose={handleCloseMobile}
                onMouseLeave={handleCloseMobile}
              >
                <Stack sx={{ pt: 2, backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} className="co-hdr-menu__root--mobile" underline="none" variant="h6" to={RouterList.product._0} component={RouterLink} onClick={handleCloseSubMenu}>Products</Link>
                  <Link color={blueGrey[800]} className="co-hdr-menu__root--mobile" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink} onClick={handleCloseSubMenu} id="co-hdr-menu-service">Services</Link>
                  <Link expand={{ expandedAbout }} color={blueGrey[800]} className="co-hdr-menu__root--mobile" underline="none" variant="h6" onClick={handleExpandAbout} id="co-hdr-menu-about">About</Link>
                  <Collapse in={expandedAbout} timeout="auto" unmountOnExit>
                    <Stack>
                      <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.mission} component={RouterLink} onClick={handleCloseAbout}>Mission</Link>
                      <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.leadershipteam} component={RouterLink} onClick={handleCloseAbout}>Leadership Team</Link>
                      <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.career} component={RouterLink} onClick={handleCloseAbout}>Careers</Link>
                    </Stack>
                  </Collapse>
                  <Link color={blueGrey[800]} className="co-hdr-menu__root--mobile" underline="none" variant="h6" onClick={handleExpandMedia} id="co-hdr-menu-media">Media</Link>
                  <Collapse in={expandedMedia} timeout="auto" unmountOnExit>
                    <Stack>
                      <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.newsroom} component={RouterLink} onClick={handleCloseMedia}>Newsroom</Link>
                      <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.blog} component={RouterLink} onClick={handleCloseMedia}>Blogs</Link>
                    </Stack>
                  </Collapse>
                  <Link color={blueGrey[800]} className="co-hdr-menu__root--mobile" underline="none" variant="h6" to={RouterList.contact._0} component={RouterLink} onClick={handleCloseSubMenu} id="co-hdr-menu-contact">Contact</Link>
                  <Divider />
                  <Box sx={{ p: 1 }}>
                    <Button variant="contained" size="small" style={{ background: '#03a9f4' }} to={RouterList.contact.demo} component={RouterLink} onClick={handleCloseSubMenu}>Request Demo</Button>
                  </Box>
                </Stack>
              </Popper>
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </Box>
    </>
  );
}

export default template;