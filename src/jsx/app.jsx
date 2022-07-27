import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../js/ScrollToTop';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CoTheme from './style/theme';

import RouterList from './router';

import ModuleHeader from './template/common/header';
import ModuleFooter from './template/common/footer';

import ModuleHome from './template/home/_0';

import ModuleProduct_0 from './template/product/_0';
import ModuleProduct_Connect from './template/product/connect';
import ModuleProduct_Edge from './template/product/edge';
import ModuleProduct_Conduct from './template/product/conduct';

import ModuleService_0 from './template/service/_0';
import ModuleService_0_1 from './template/service/study-setup';
import ModuleService_0_2 from './template/service/clinical-data-management';
import ModuleService_0_3 from './template/service/biostatistic-programming';

import ModuleAbout_Mission from './template/about/mission';
import ModuleAbout_LeadershipTeam from './template/about/leadership-team';
import ModuleAbout_Career from './template/about/career';
import ModuleAbout_Career_1 from './template/about/_0_3_1';
import ModuleAbout_Career_2 from './template/about/_0_3_2';
import ModuleAbout_Career_3 from './template/about/_0_3_3';
import ModuleAbout_Career_4 from './template/about/_0_3_4';
import ModuleAbout_Career_5 from './template/about/_0_3_5';
import ModuleAbout_Career_6 from './template/about/_0_3_6';
import ModuleAbout_Career_7 from './template/about/_0_3_7';
import ModuleAbout_Career_8 from './template/about/_0_3_8';

import ModuleMedia_Newsroom from './template/media/newsroom';
import ModuleMedia_Blog from './template/media/blog';
import ModuleMedia_Blog_1 from './template/media/blog_1';
import ModuleMedia_Blog_2 from './template/media/blog_2';
import ModuleMedia_Blog_3 from './template/media/blog_3';
import ModuleMedia_Blog_4 from './template/media/blog_4';
import ModuleMedia_Blog_5 from './template/media/blog_5';

import ModuleContact from './template/contact/_0';
import ModuleContact_Quote from './template/contact/quote';
import ModuleContact_Demo from './template/contact/demo';

import ModulePolicy_Privacy from './template/policy/privacy';
import ModulePolicy_Cookie from './template/policy/cookie';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={CoTheme}>
        <Router>
          <ScrollToTop>
            <ModuleHeader />
            <main>
              <Routes>
                <Route path={RouterList.home._0} element={<ModuleHome />} />
                
                <Route path={RouterList.product._0} element={<ModuleProduct_0 />} />
                <Route path={RouterList.product.connect} element={<ModuleProduct_Connect />} />
                <Route path={RouterList.product.edge} element={<ModuleProduct_Edge />} />
                <Route path={RouterList.product.conduct} element={<ModuleProduct_Conduct />} />
                
                <Route path={RouterList.service._0} element={<ModuleService_0 />} />
                <Route path={RouterList.service.studysetup} element={<ModuleService_0_1 />} />
                <Route path={RouterList.service.clinicaldatamanagement} element={<ModuleService_0_2 />} />
                <Route path={RouterList.service.biostatisticprogramming} element={<ModuleService_0_3 />} />
                
                <Route path={RouterList.about.mission} element={<ModuleAbout_Mission />} />
                <Route path={RouterList.about.leadershipteam} element={<ModuleAbout_LeadershipTeam />} />
                <Route path={RouterList.about.career} element={<ModuleAbout_Career />} />
                <Route path={RouterList.about.career_1} element={<ModuleAbout_Career_1 />} />
                <Route path={RouterList.about.career_2} element={<ModuleAbout_Career_2 />} />
                <Route path={RouterList.about.career_3} element={<ModuleAbout_Career_3 />} />
                <Route path={RouterList.about.career_4} element={<ModuleAbout_Career_4 />} />
                <Route path={RouterList.about.career_5} element={<ModuleAbout_Career_5 />} />
                <Route path={RouterList.about.career_6} element={<ModuleAbout_Career_6 />} />
                <Route path={RouterList.about.career_7} element={<ModuleAbout_Career_7 />} />
                <Route path={RouterList.about.career_8} element={<ModuleAbout_Career_8 />} />

                <Route path={RouterList.media.newsroom} element={<ModuleMedia_Newsroom />} />
                <Route path={RouterList.media.blog} element={<ModuleMedia_Blog />} />
                <Route path={RouterList.media.blog_1} element={<ModuleMedia_Blog_1 />} />
                <Route path={RouterList.media.blog_2} element={<ModuleMedia_Blog_2 />} />
                <Route path={RouterList.media.blog_3} element={<ModuleMedia_Blog_3 />} />
                <Route path={RouterList.media.blog_4} element={<ModuleMedia_Blog_4 />} />
                <Route path={RouterList.media.blog_5} element={<ModuleMedia_Blog_5 />} />
                
                <Route path={RouterList.contact._0} element={<ModuleContact />} />
                <Route path={RouterList.contact.quote} element={<ModuleContact_Quote />} />
                <Route path={RouterList.contact.demo} element={<ModuleContact_Demo />} />
                
                <Route path={RouterList.policy.privacy} element={<ModulePolicy_Privacy />} />
                <Route path={RouterList.policy.cookie} element={<ModulePolicy_Cookie />} />
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