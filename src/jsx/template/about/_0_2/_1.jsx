import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgAvik from '../../../../img/about/leadership-team/management/Avik-Pal.png';
import ImgYerramalli from '../../../../img/about/leadership-team/management/Yerramalli.png';
import ImgPartha from '../../../../img/about/leadership-team/management/Partha.png';

import CustomProfile from '../../../component/profile';

const template = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container direction='column' spacing={6} sx={{ mt: 1 }}>
        <Grid item>
          <CustomProfile
            ImgSrc={ImgAvik}
            Name="Avik Pal"
            Position=" | Founder &amp; CEO"
            Summary="Avik has extensive experience in enterprise applications, managing global delivery at various fortune 500 clients across North America, Europe, Latin America &amp; Asia. Before starting CliniOps, he worked with NTT DATA. Prior to that, he worked with two successful start-ups, managing global delivery at FocusFrame (acquired by Hexaware Technologies) and Euclid (acquired by Persistent Systems)."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  He is also a Founding Board member at iKure, a social entrepreneurship healthcare startup, focussing on affordable healthcare for the last mile.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Avik has co-authored several papers, publications, posters, book chapters (in collaborations with researchers from Harvard University, Boston University, Boston Medical Center, Washington University School of Medicine, Gates Foundation studies et al.). He has been invited as a speaker/panelist at DIA, Scope and several Healthcare conferences. He was part of the 'US India Strategic Partnership Forum' delegate to 'Vibrant Gujarat Summit, 2019' (Delegate Lead: John Chambers), and part of the 'US Department of State' delegate to the 'Global Entrepreneurship Summit, 2017' (Delegate Lead: Ivanka Trump) and several other events. Avik was Recognized among 'Top 50 Indian Entrepreneurs in the US', 2017 By 'The Technology Headlines'.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Avik was also the President of 'IIT Foundation', Silicon Valley Chapter, the alumni association of Indian Institute of Technology, Kharagpur. Avik is passionate about Global Health, Social Entrepreneurship and Impact. He also enjoys travelling and has traveled to 40+ countries, including an expedition to Antarctica.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Avik holds a B. Tech (Honors) from IIT Kharagpur, and an MBA from University of San Francisco, where he was awarded the 'McLaren Fellowship.'
                </Typography>
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomProfile
            ImgSrc={ImgYerramalli}
            Name="Yerramalli Subramaniam"
            Position=" | Co-Founder &amp; CTO"
            Summary="Yerramalli Subramaniam (Subbu) has over 20 years of experience in the life science industry. In his current role as CTO, CliniOps, he is leading the technical team, defining company's product roadmap and also championing the technical and product partnerships. He also collaborates closely with customers to provide his expertise in their transition to decentralized trials, on a global scale."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  Prior to joining CliniOps, he worked at Applied Biosystems (acquired by Life Technologies/Thermo Fisher) where he led the design and development of several RUO and diagnostic instruments. In this position, he interacted extensively with various pharma companies, core facilities, genome centers and PI labs to understand customer needs and provide custom solutions. He has in-depth knowledge of CE and FDA regulations and has launched multiple instrument and software products with these regulatory compliances that received several industry awards. Prior to working at Applied Biosystems, Subbu worked at Sanofi (Hoechst Marion Roussel) as part of their supply chain automation effort.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Subbu received Computerworld's 'Premier 100 IT Leaders' award in 2015. He also has publications and several patents to his credit in the area of qPCR and next generation sequencing. Subbu has also presented his work as a speaker at various leading conferences including DIA, SCDM, FDA Innovation Summit, Health 2.0 and several others. He has also published book chapters and co-authored several publications.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Subbu holds a B. Tech (Honors) from IIT Kharagpur, and an MBA from Haas School of Business, University of California, Berkeley.
                </Typography>
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomProfile
            ImgSrc={ImgPartha}
            Name="Partha Chakraborty"
            Position=" | Vice President, Global Delivery"
            Summary="Partha has more than 25 years of experience working across USA, Europe, Hong Kong, New Zealand and India, in leading global delivery, primarily in life sciences &amp; healthcare industry. Prior to joining CliniOps, he has worked in Cognizant Technology Solution as Global Delivery Head of Life Sciences R&amp;D Practice and at Zensar (formerly Fujitsu ICIM)."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  He has led initiatives of transforming pharmaceutical organizations in the area of clinical development &amp; drug safety and providing them comprehensive end-to-end business process and IT solutions using state of the art technology services.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Partha was former Chair of CDISC AP3C (Asia Pacific Coordination Committee), a key industry forum working on data standard. He has also presented his views on transformations in clinical development and pharmacovigilance in FDA science congress, DIA, ISPE, CDISC and several conferences and seminars in past. Partha has published chapters in books on methods &amp; technology of pharmacovigilance, digital security (Software Development Techniques for Constructive Information Systems Design, Pharmacoinformatics and Drug Discovery Technologies and Elements of Pharmacovigilance). His latest book on Modern Approaches in Software innovations in Clinical and Medical Technologies was published in 2015.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Partha holds a B. Tech (Honors) from IIT Kharagpur, and an MBA from Sysmbiosis School of Management Studies, Pune, India.
                </Typography>
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
}

export default template;