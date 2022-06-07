import React from 'react';
import { Grid, Typography } from '@mui/material';

import ImgAkinyele from '../../../../img/about/leadership-team/management/Akinyele.png';
import ImgPatricia from '../../../../img/about/leadership-team/management/Patricia.png';
import ImgArjun from '../../../../img/about/leadership-team/management/Arjun.png';

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
            ImgSrc={ImgAkinyele}
            Name="Mr. Michael Akinyele"
            Position=", MBA, SES"
            Summary="Mr. Michael Akinyele, MBA, SES, is the former, founding Chief Innovation Officer of the U.S. Department of Veterans Affairs (VA), the largest federal civilian agency with a ~$250Bn budget and ~400K employees. He was appointed to the Senior Executive Service (SES) in 2019, and was responsible for leading, transforming and scaling enterprise innovation at the Department."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  His efforts were primarily focused on implementing Section 152 of the MISSION Act of 2018 which authorized the creation of a Center for Innovation for Care and Payment at the VA. He was the Principal Lead of the VA Innovation Center (VIC) and served in that capacity from March 2018 to September 2020.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Mr. Akinyele is the Founder and Managing Principal of The Maximizer Group, an independent advisory firm primarily advising corporations, investors and startup companies. He is a health care futurist, collaborative leader, product and growth expert focused on inventing the future of healthcare delivery and payments. Prior to his work at the VA, his most recent fulltime role was serving as the Director of Venture Development — Health Care at a private foundation with ~$2Bn in and ~$125M in annual disbursements.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Prior to his role in philanthropy, he led management consulting teams focused on developing and implementing solutions to strategic and operational challenges facing multinational corporations. In the U.S. health care industry, he has advised health systems, physician groups, academic medical centers, health plans, pharmaceutical companies, pharmacy benefit managers, and a Medicaid agency. He is a member of the board of the Lymphoma Research Foundation (LRF), the largest foundation focused on funding research aimed at finding a cure and serving those touched by the disease.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Mr. Akinyele started his career managing physician practices in the Washington, D.C. metro area. He earned his Master's in Business Administration from Stanford Graduate School of Business and graduated magna cum laude with a bachelor's degree in Economics from Howard University.
                </Typography>
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomProfile
            ImgSrc={ImgPatricia}
            Name="Patricia Salber"
            Position=", MD, MBA"
            Summary="Dr. Salber is the founder and CEO of Health Tech Hatch, committed to healthcare innovators and entrepreneurs. She also hosts a variety of media outlets under the brand, 'The Doctor Weighs In', including a popular, widely read blog, a weekly internet radio show, and creative media/social media services for healthcare companies and conferences. She is a board certified Internist and Emergency Physician with decades of experience as a physician executive."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  She was the Chief Medical Officer at Universal American Corp, the first Physician Director of National Accounts for Kaiser Permanente and Medical Director of the Kaiser Permanente-General Motors group.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  She was the first woman to serve as President of the California Chapter of the American College of Emergency Physicians and also served on the board of the national organization. She serves on the editorial boards of several journals, authored numerous textbook chapters and journal articles, and is a frequent speaker. Dr. Salber received her MD from University of California, San Francisco, where she was trained in Internal Medicine, Endocrinology and Health Policy. She also has an MBA from the University of California, Irvine.
                </Typography>
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomProfile
            ImgSrc={ImgArjun}
            Name="Arjun Malhotra"
            Position="&nbsp;"
            Summary="A pioneer of the Indian IT industry, Mr. Malhotra served as Chairman of Headstrong's Board of Directors before its acquisition by Genpact in May 2011. Prior to Headstrong he was Chief Executive Officer and Chairman of TechSpan, which merged with Headstrong in October 2003."
            FullContent={
              <>
                <Typography sx={{ mt: 2 }}>
                  Mr. Malhotra has a long string of entrepreneurial successes. He co-founded the HCL group in 1975, taking it from a six-person “garage operation” to one of India's largest Information Technology corporations. The first leading Indian entrepreneur to relocate to USA, Mr Malhotra took over HCL's US operation in 1989 and grew it to nearly $100 million annual revenues. In 1992 he ran the HCL-HP joint venture in India, and in 1996 he set up and ran the joint venture with Deluxe Corporation. He consolidated and grew HCL operations in Hong Kong, Australia and New Zealand.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Mr Malhotra is on the Board of Governors of ISB, IIM Udaipur, IIT (Kharagpur) Foundation and several premier institutes. He is a past Co-Chair of the Global Pan-IIT Alumni Association. He is Fellow of IETE; A Member of Institute of Engineers, India. He is also a Member of IPSS and is on the Board of Governors of The Doon School. A Life Fellow of IIT Kharagpur, he has been awarded Doctor of Science (Honoris Causa) in September 2012. He is a Charter Member of TiE, having previously served as the Chairman of the Board. He was awarded the Albert Einstein Technology Medal for 2001. The Institution of Engineers (India) has named Mr. Malhotra an Eminent Engineering Personality. He is presently an Advisor in a number of start-ups in Education and healthcare space.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  Mr. Malhotra studied at The Doon School, Dehradun, graduated from IIT Kharagpur with B.Tech. (Hons.) in Electronics &amp; Electrical Communication Engineering and received the Dr. B.C. Roy Gold Medal. In 1985, he attended the Advanced Management Program at Harvard Business School.
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