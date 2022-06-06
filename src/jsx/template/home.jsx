import React from 'react';

import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';

const template = () => {
  return (
    <>
      <main>
    <div className="co-feature co-home-section">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>We have delivered industry leading innovations</h1>
          <div className="co-heading1 has-text-align--center">Entrust your clinical trials with the most innovative DCT
            platform </div>
          <div className="is-wrap m-grid"
            sx={{gridColumnGap: "40px",
            gridRowGap:0,
            gridTemplateColumns: "repeat(auto-fit,350px)",
            marginTop:"30px"}}>
            <div className="co-feature__tile"> <img src="./img/home/hm-platform.svg" alt="" />
              <div className="co-feature__tile__text">Unified platform (Patients, Sites, Sponsors and CROs)</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-integration.svg" alt="" />
              <div className="co-feature__tile__text">Medical device integration &amp; continuous data collection</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-data-science.svg" alt="" />
              <div className="co-feature__tile__text">Unified platform with built-in DataScience (AI/ML/NLP)</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-electronic.svg" alt="" />
              <div className="co-feature__tile__text">Electronic patient enrollment with e-consent</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-remote.svg" alt="" />
              <div className="co-feature__tile__text">Remote Monitoring &amp; remote source data verification (rSDV)</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-smart.svg" alt="" />
              <div className="co-feature__tile__text">Smart Study setup</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-protocol.svg" alt="" />
              <div className="co-feature__tile__text">Patient Engagement &amp; Protocol Adherence</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-telemedicine.svg" alt="" />
              <div className="co-feature__tile__text">Built-in telemedicine in Clinical trials</div>
            </div>
            <div className="co-feature__tile"> <img src="./img/home/hm-cloud.svg" alt="" />
              <div className="co-feature__tile__text">Cloud first architecture with AWS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="co-app-suite co-home-section">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>CliniOps App Suite</h1>
          <div className="is-wrap m-grid"
            sx={{
              gridGap:"40px",
              gridTemplateColumns:"repeat(auto-fit,350px)",
              marginTop:"30px"
              }}>
            <div className="co-app-suite__tile"> <img src="img/home/hm-co-connect.svg" alt="" />
              <h3>CliniOps Connect</h3>
              <div className="co-app-suite__tile__text">Puts patients at the center of the clinical trials, and enables
                seamless participation via telemedicine, from the comfort of their homes or at their regular care
                facility. It increases patient engagement, retention, and protocol adherence, with regular reminders,
                notifications, alerts, educational materials et al.</div> <a href="/products">Learn More</a>
            </div>
            <div className="co-app-suite__tile"> <img src="img/home/hm-co-edge.svg" alt="" />
              <h3>CliniOps Edge</h3>
              <div className="co-app-suite__tile__text">Purpose-built for high quality &amp; real-time electronic data
                collection at source (eSource). The application runs on standard mobile devices in a complete offline
                mode, with all checks and balances, ensuring very clean and high-quality data, collected digitally at
                the point of care.</div> <a href="/products">Learn More</a>
            </div>
            <div className="co-app-suite__tile"> <img src="img/home/hm-co-conduct.svg" alt="" />
              <h3>CliniOps Conduct</h3>
              <div className="co-app-suite__tile__text">Unified platform to streamline Clinical data management, Clinical
                operations, and accelerated Regulatory submission processes. It enables central and remote monitoring
                (rSDV). Sponsors and CROs can view the data along with powerful dashboards, reports, and study KPIs, to
                support decentralized, virtual, or hybrid trials.</div> <a href="/products">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="co-home-section co-result">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>Our patented technology drives superior results</h1>
          <div className="is-wrap m-grid"
            sx={{
              gridColumnGap:"40px",
              gridRowGap:0,
              gridTemplateColumns:"repeat(auto-fit,350px)",
              marginTop:"30px"
              }}>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-data.svg" alt="" />
              <div>
                <h3>5000X</h3>
                <div className="co-result__tile__text">Improvement in Data Quality</div>
              </div>
            </div>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-retention.svg" alt="" />
              <div>
                <h3>3X</h3>
                <div className="co-result__tile__text">Better patient retention</div>
              </div>
            </div>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-cost.svg" alt="" />
              <div>
                <h3>50%</h3>
                <div className="co-result__tile__text">Reduction in Clinical Trial Cost</div>
              </div>
            </div>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-setup.svg" alt="" />
              <div>
                <h3>10X</h3>
                <div className="co-result__tile__text">Improvement in the clinical trial study setup</div>
              </div>
            </div>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-data.svg" alt="" />
              <div>
                <h3>5X</h3>
                <div className="co-result__tile__text">Improvement in data access with real time data collection and AI
                  analysis</div>
              </div>
            </div>
            <div className="co-result__tile"> <img src="./img/home/hm-improvement-closeout.svg" alt="" />
              <div>
                <h3>5X</h3>
                <div className="co-result__tile__text">Improvement in time for study closeout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="co-home-section co-testimonial">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>Testimonials</h1>
          <div className="is-wrap m-grid"
            sx={{
              gridGap:"40px",
              gridTemplateColumns:"repeat(auto-fit,350px)",
              marginTop:"30px"
              }}>
            <div className="co-testimonial__tile">
              <div className="co-testimonial__tile__image"> <img src="img/home/hm-testimonial-1.png" alt="" /> </div>
              <div className="co-testimonial__tile__text">"CliniOps is innovative, easy to use, and has the potential to
                transform how we recruit and consent subiects. I believe that it is a real innovative improvement in
                clinical research."</div>
              <div>
                <div className="co-testimonial__tile__name">Dr. John Mendelson</div>
                <div className="co-testimonial__tile__designation">Chair, IRB, California Pacific Medical Center</div>
              </div>
            </div>
            <div className="co-testimonial__tile">
              <div className="co-testimonial__tile__image"> <img src="img/home/hm-testimonial-2.png" alt="" /> </div>
              <div className="co-testimonial__tile__text">"I have to say that now personally having gone through each and
                every form on the tablet, I really appreciate what a great system this is and how it will help us to
                have better data in the long run."</div>
              <div>
                <div className="co-testimonial__tile__name">Dr. Laura Guay</div>
                <div className="co-testimonial__tile__designation">Vice President for Research, Elizabeth Glaser Pediatric
                  AIDS Foundation</div>
              </div>
            </div>
            <div className="co-testimonial__tile">
              <div className="co-testimonial__tile__image"> <img src="img/home/hm-testimonial-3.png" alt="" /> </div>
              <div className="co-testimonial__tile__text">"eSource solution is a great compliment for Clinical trials. The
                off-line data capture with point-of-care edit checks gives us quality data in real time. The solution
                provides integrated workflows, flexible configuration and a simple user interface design. CliniOps
                provided excellent customer support and stood by us for clinical trials supporting FDA submissions."
              </div>
              <div>
                <div className="co-testimonial__tile__name">Daya Ranamukhaarachchi, PhD</div>
                <div className="co-testimonial__tile__designation">VP/Regulatory Affairs, Scanadu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="co-home-section co-news">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>News and Updates</h1>
          <div className="is-wrap m-grid"
            sx={{gridGap:"40px",gridTemplateColumns:"repeat(auto-fit,350px)",marginTop:"30px"}}>
            <div className="co-news__tile">
              <div className="co-news__tile__image"> <img src="img/home/hm-news-1.png" alt="" /> </div>
              <div className="co-news__tile__text"> Running next generation hybrid and virtual clinical trials on AWS <div
                  sx={{marginTop:"10px"}}> <a
                    href="https://aws.amazon.com/blogs/industries/running-next-generation-hybrid-and-virtual-clinical-trials-on-aws/"
                    target="_blank">Read More</a> </div>
              </div>
            </div>
            <div className="co-news__tile">
              <div className="co-news__tile__image"> <img src="img/home/hm-news-2.png" alt="" /> </div>
              <div className="co-news__tile__text"> CliniOps collaborates with Microsoft, iKure &amp; McGill, for AI in the
                treatment of non-communicable disease (NCD) <div sx={{marginTop:"10px"}}> <a
                    href="https://theodi.org/article/the-six-data-collaborations-chosen-for-our-new-peer-learning-network/"
                    target="_blank">Read More</a> </div>
              </div>
            </div>
            <div className="co-news__tile">
              <div className="co-news__tile__image"> <img src="img/home/hm-news-3.png" alt="" /> </div>
              <div className="co-news__tile__text"> A PubMed publication on 'The safety of combined triple drug therapy in
                the neglected tropical diseases co-endemic setting of Fiji' <div sx={{marginTop:"10px"}}> <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7098623/" target="_blank">Read More</a> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="co-award co-home-section">
      <div className="m-container">
        <div className="is-row m-grid">
          <h1>Awards and Recognition</h1>
          <div className="is-wrap m-grid"
            sx={{gridGap:"40px",gridTemplateColumns:"repeat(auto-fit,310px)",marginTop:"30px"}}>
            <div className="co-award__tile"
              onclick="window.open(&quot;https://www.gartner.com/en/documents/3989136&quot;,&quot;_blank&quot;)">
              <div className="co-award__tile__image"> <img className="on-hover" src="img/home/hm-award-1.png" alt="" /> <img
                  className="on-default" src="img/home/hm-award-1-col.png" alt="" /> </div>
              <div className="co-award__tile__text"> Hype Cycle for Life Sciences </div>
            </div>
            <div className="co-award__tile"
              onclick="window.open(&quot;https://www.prweb.com/releases/2017/06/prweb14414347.htm&quot;,&quot;_blank&quot;)">
              <div className="co-award__tile__image"> <img className="on-hover" src="img/home/hm-award-2.png" alt="" /> <img
                  className="on-default" src="img/home/hm-award-2-col.png" alt="" /> </div>
              <div className="co-award__tile__text"> Technology Leadership Award </div>
            </div>
            <div className="co-award__tile"
              onclick="window.open(&quot;https://www.fda.gov/about-fda/innovation-fda/innovate-today-summit-2019&quot;,&quot;_blank&quot;)">
              <div className="co-award__tile__image"> <img className="on-hover" src="img/home/hm-award-3.png" alt="" /> <img
                  className="on-default" src="img/home/hm-award-3-col.png" alt="" /> </div>
              <div className="co-award__tile__text"> FDA Innovation Summit </div>
            </div>
            <div className="co-award__tile"
              onclick="window.open(&quot;https://www.pharmavoice.com/news/innovations-technologies/615901/&quot;,&quot;_blank&quot;)">
              <div className="co-award__tile__image"> <img className="on-hover" src="img/home/hm-award-4.png" alt="" /> <img
                  className="on-default" src="img/home/hm-award-4-col.png" alt="" /> </div>
              <div className="co-award__tile__text"> Technology Innovation </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </>
  );
}

export default template;