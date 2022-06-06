import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CoTheme from './style/theme';

import RouterLink from './router';

// Import Footer

// EXPLORE ALTERNATIVE
//import { ThemeProvider } from '@material-ui/core/styles';
// import Theme from './theme';

// CUSTOM CSS
// import '../css/style.css';

import ModuleHeader from './template/common/header';
import ModuleFooter from './template/common/footer';

import ModuleProduct from './template/product/_0';

import ModuleService from './template/service/_0';
import ModuleService_1 from './template/service/_1';
import ModuleService_2 from './template/service/_2';
import ModuleService_3 from './template/service/_3';

import ModuleAbout_1 from './template/about/_1';
import ModuleAbout_2 from './template/about/_2';
import ModuleAbout_3 from './template/about/_3';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={CoTheme}>
        <ModuleHeader />
        <main>
          {console.log(RouterLink.product._0)}
          <Router>
            <Routes>
              <Route path={RouterLink.home._0} element={<ModuleProduct />} />
              
              <Route path={RouterLink.product._0} element={<ModuleProduct />} />
              {/* <Route path={RouterLink.product._1} element={<ModuleProduct_1 />} /> */}
              {/* <Route path={RouterLink.product._2} element={<ModuleProduct_2 />} /> */}
              {/* <Route path={RouterLink.product._3} element={<ModuleProduct_3 />} /> */}
              {/* <Route path={RouterLink.contact._1} element={<ModuleContact_4 />} /> */}
              
              <Route path={RouterLink.service._0} element={<ModuleService />} />
              <Route path={RouterLink.service._1} element={<ModuleService_1 />} />
              <Route path={RouterLink.service._2} element={<ModuleService_2 />} />
              <Route path={RouterLink.service._3} element={<ModuleService_3 />} />
              
              <Route path={RouterLink.about._1} element={<ModuleAbout_1 />} />
              <Route path={RouterLink.about._2} element={<ModuleAbout_2 />} />
              <Route path={RouterLink.about._3} element={<ModuleAbout_3 />} />
              {/* <Route path={RouterLink.about._3_1} element={<ModuleAbout_3_1 />} /> */}

              {/* <Route path={RouterLink.media._1} element={<ModuleMedia_1 />} /> */}
              {/* <Route path={RouterLink.media._2} element={<ModuleMedia_2 />} /> */}
              {/* <Route path={RouterLink.media._1} element={<ModuleMedia_2_1 />} /> */}
              
              {/* <Route path={RouterLink.contact._0} element={<ModuleContact />} /> */}

              {/* <Route path={RouterLink.contact._2} element={<ModuleRequestDemo />} /> */}
            </Routes>
          </Router>
        </main>
        <ModuleFooter />
      </ThemeProvider>
    </>
  );
}

export default App;