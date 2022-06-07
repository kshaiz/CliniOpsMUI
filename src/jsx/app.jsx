import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../js/ScrollToTop';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CoTheme from './style/theme';

import RouterList from './router';

import ModuleHeader from './template/common/header';
import ModuleFooter from './template/common/footer';

import ModuleProduct_0 from './template/product/_0';
import ModuleProduct_0_1 from './template/product/_0_1';
import ModuleProduct_0_2 from './template/product/_0_2';
import ModuleProduct_0_3 from './template/product/_0_3';

import ModuleService_0 from './template/service/_0';
import ModuleService_0_1 from './template/service/_0_1';
import ModuleService_0_2 from './template/service/_0_2';
import ModuleService_0_3 from './template/service/_0_3';

import ModuleAbout_0_1 from './template/about/_0_1';
import ModuleAbout_0_2 from './template/about/_0_2';
import ModuleAbout_0_3 from './template/about/_0_3';
import ModuleAbout_0_3_1 from './template/about/_0_3_1';
import ModuleAbout_0_3_2 from './template/about/_0_3_2';
import ModuleAbout_0_3_3 from './template/about/_0_3_3';
import ModuleAbout_0_3_4 from './template/about/_0_3_4';
import ModuleAbout_0_3_5 from './template/about/_0_3_5';
import ModuleAbout_0_3_6 from './template/about/_0_3_6';
import ModuleAbout_0_3_7 from './template/about/_0_3_7';
import ModuleAbout_0_3_8 from './template/about/_0_3_8';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={CoTheme}>
        {/* Remove basename is issues with URLs in production deployment  */}
        <Router basename={"/cliniopsmui/"}>
        {/* <Router> */}
          <ScrollToTop>
            <ModuleHeader />
            <main>
              <Routes>
                <Route path={RouterList.home._0} element={<ModuleProduct_0 />} />
                
                <Route path={RouterList.product._0} element={<ModuleProduct_0 />} />
                <Route path={RouterList.product._0_1} element={<ModuleProduct_0_1 />} />
                <Route path={RouterList.product._0_2} element={<ModuleProduct_0_2 />} />
                <Route path={RouterList.product._0_3} element={<ModuleProduct_0_3 />} />
                
                <Route path={RouterList.service._0} element={<ModuleService_0 />} />
                <Route path={RouterList.service._0_1} element={<ModuleService_0_1 />} />
                <Route path={RouterList.service._0_2} element={<ModuleService_0_2 />} />
                <Route path={RouterList.service._0_3} element={<ModuleService_0_3 />} />
                
                <Route path={RouterList.about._0_1} element={<ModuleAbout_0_1 />} />
                <Route path={RouterList.about._0_2} element={<ModuleAbout_0_2 />} />
                <Route path={RouterList.about._0_3} element={<ModuleAbout_0_3 />} />
                <Route path={RouterList.about._0_3_1} element={<ModuleAbout_0_3_1 />} />
                <Route path={RouterList.about._0_3_2} element={<ModuleAbout_0_3_2 />} />
                <Route path={RouterList.about._0_3_3} element={<ModuleAbout_0_3_3 />} />
                <Route path={RouterList.about._0_3_4} element={<ModuleAbout_0_3_4 />} />
                <Route path={RouterList.about._0_3_5} element={<ModuleAbout_0_3_5 />} />
                <Route path={RouterList.about._0_3_6} element={<ModuleAbout_0_3_6 />} />
                <Route path={RouterList.about._0_3_7} element={<ModuleAbout_0_3_7 />} />
                <Route path={RouterList.about._0_3_8} element={<ModuleAbout_0_3_8 />} />

                {/* <Route path={RouterList.media._1} element={<ModuleMedia_1 />} /> */}
                {/* <Route path={RouterList.media._2} element={<ModuleMedia_2 />} /> */}
                {/* <Route path={RouterList.media._1} element={<ModuleMedia_2_1 />} /> */}
                
                {/* <Route path={RouterList.contact._0} element={<ModuleContact />} /> */}
                {/* <Route path={RouterList.contact._0_1} element={<ModuleContact_4 />} /> */}
                {/* <Route path={RouterList.contact._0_2} element={<ModuleRequestDemo />} /> */}
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