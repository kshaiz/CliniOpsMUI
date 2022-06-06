import { TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blueGrey[200],
    // color: theme.palette.common.white,
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export { StyledTableCell, StyledTableRow };

