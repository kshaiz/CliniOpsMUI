import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../js/ScrollToTop';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CoTheme from './style/theme';

import RouterList from './router';

// Import Footer

// EXPLORE ALTERNATIVE
//import { ThemeProvider } from '@material-ui/core/styles';
// import Theme from './theme';

// CUSTOM CSS
// import '../css/style.css';

import ModuleHeader from './template/common/header';
import ModuleFooter from './template/common/footer';

import ModuleProduct from './template/product/_0';
import ModuleProduct_1 from './template/product/_1';
import ModuleProduct_2 from './template/product/_2';
import ModuleProduct_3 from './template/product/_3';

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
        {/* Remove basename is issues with URLs in production deployment  */}
        {/* <Router basename={process.env.PUBLIC_URL + "/"}> */}
        <Router>
          <ScrollToTop>
            <ModuleHeader />
            <main>
              <Routes>
                <Route path={RouterList.home._0} element={<ModuleProduct />} />
                
                <Route path={RouterList.product._0} element={<ModuleProduct />} />
                <Route path={RouterList.product._1} element={<ModuleProduct_1 />} />
                <Route path={RouterList.product._2} element={<ModuleProduct_2 />} />
                <Route path={RouterList.product._3} element={<ModuleProduct_3 />} />
                
                <Route path={RouterList.service._0} element={<ModuleService />} />
                <Route path={RouterList.service._1} element={<ModuleService_1 />} />
                <Route path={RouterList.service._2} element={<ModuleService_2 />} />
                <Route path={RouterList.service._3} element={<ModuleService_3 />} />
                
                <Route path={RouterList.about._1} element={<ModuleAbout_1 />} />
                <Route path={RouterList.about._2} element={<ModuleAbout_2 />} />
                <Route path={RouterList.about._3} element={<ModuleAbout_3 />} />
                {/* <Route path={RouterList.about._3_1} element={<ModuleAbout_3_1 />} /> */}

                {/* <Route path={RouterList.media._1} element={<ModuleMedia_1 />} /> */}
                {/* <Route path={RouterList.media._2} element={<ModuleMedia_2 />} /> */}
                {/* <Route path={RouterList.media._1} element={<ModuleMedia_2_1 />} /> */}
                
                {/* <Route path={RouterList.contact._0} element={<ModuleContact />} /> */}
                {/* <Route path={RouterList.contact._1} element={<ModuleContact_4 />} /> */}
                {/* <Route path={RouterList.contact._2} element={<ModuleRequestDemo />} /> */}
              </Routes>
            </main>
            <ModuleFooter />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;