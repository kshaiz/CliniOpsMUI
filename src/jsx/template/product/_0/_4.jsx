import React from 'react';
import { Typography, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Stack } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import { StyledTableCell, StyledTableRow } from '../../../style/table';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  }
});

function createData(
  patient,
  site,
  cro,
  sponsor
) {
  return { patient, site, cro, sponsor };
}

const rows = [
  createData(
    'Telemedicine to participate from home',
    'Wider Patient Outreach and Patient Diversity',
    'Fast and Standardized Study Setup',
    'Unified Hybrid Data Collection across phases and therapeutic areas'
  ),
  createData(
    'Continuous Monitoring via wearables and connected devices',
    'Flexibility with Data collection at home & site',
    'Minimal Query Resolution',
    'Real time Adverse Events'
  ),
  createData(
    'Patient engagement via alerts and remainders',
    'Collaborative platform for Remote Teams',
    'Minimal Travel to Sites for monitors & data managers "human centricity"',
    'Real Time Data Science'
  ),
  createData(
    'Minimal travel to sites',
    'Electronic Source data (eSource) quality data',
    'Remote SDV (rSDV) & remote monitoring',
    'Complete Regulatory Compliance'
  ),
  createData(
    'Home health by phlebotomists',
    'Eliminate paper works with single source',
    'Rapid DB lock with standardized datasets',
    'Fail Early and Fail Fast in Trial Cycles'
  ),
  createData(
    'Better protocol adherence',
    'Higher Patient Retention',
    'Analyze Data in Real time',
    'High ROI with significant savings in time and budget'
  ),
];

const template = () => {

  return (
    <>
      <Typography variant="h2" component="h2" className="co-page-heading" sx={{ textAlign: { xs: 'center', md: 'left'} }}>
        CliniOps Value Proposition across stakeholders
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Patient safety is the integral principle of any trial, but suddenly we now have Covid-19 situation where having patients come into clinical sites for their scheduled visits poses a significant risk to their health and well being. And not just patient alone, but also the safety of the study team, including the monitors, the data managers, the CRAs, for any activity that requires a visit to the site. CliniOps decentralized solution offers the safety and comfort across all stakeholders, with increased efficiency and highest data quality.
      </Typography>
        <Paper mt={2} sx={{ overflowX: "auto", boxShadow: 0, border: 0 }} className={styles.root}>
      
      <TableContainer sx={{ borderRadius: '.25em', border: `1px solid ${blueGrey[100]}`, maxWidth: "calc(100vw - 60px)", overflow: "auto", margin: "0 auto", mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Patients</StyledTableCell>
              <StyledTableCell>Sites</StyledTableCell>
              <StyledTableCell>CROs</StyledTableCell>
              <StyledTableCell>Sponsors</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.patient}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.patient}
                </StyledTableCell>
                <StyledTableCell>{row.site}</StyledTableCell>
                <StyledTableCell>{row.cro}</StyledTableCell>
                <StyledTableCell>{row.sponsor}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </>
  );
}

export default template;