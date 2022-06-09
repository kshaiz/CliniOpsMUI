import React from 'react';
import { Typography } from '@mui/material';

import { blueGrey } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Cookie Policy
      </Typography>
      <Typography variant="caption" color={blueGrey[400]}>
        Last updated: August 08, 2021
      </Typography>
      <Typography variant="subtitle1" mt={1}>This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</Typography>
      <Typography variant="subtitle1" mt={1}>Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.</Typography>
      <Typography variant="subtitle1" mt={1}>We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.</Typography>
    </>
  );
}

export default template;