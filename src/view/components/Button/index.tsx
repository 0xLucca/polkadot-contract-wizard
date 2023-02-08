import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  fontSize: '1.4rem',
  borderRadius: '5rem',
  padding: '8px 16px',
  minWidth: '11rem',
  border: '1px solid',
  backgroundColor: '#e6007b2f',

  '&:hover': {
    backgroundColor: '#e6007b83',
    color: 'white',
    border: '1px solid #c00569 ',
  },
  '&:disabled': {
    color: theme.palette.grey[600],
  },

  '&.MuiButton-outlined': {
    color: 'white',
    borderColor: theme.palette.primary.main,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      border: '1px solid',
    },
  },

}));

export default StyledButton

// export default function CustomizedButtons() {
//   return (
//     <>
//       <Stack spacing={4} direction="row" flexWrap="wrap" gap={2}>
//         <StyledButton variant="outlined" size="large">
//           <ArrowBackRoundedIcon fontSize="medium" /> Back
//         </StyledButton>
//         <StyledButton variant="contained" size="large" disabled>
//           Next
//         </StyledButton>
//         <StyledButton size="large">
//           Next
//         </StyledButton>
//         <StyledButton size="large">
//           🚀 Deploy your contract
//         </StyledButton>
//       </Stack>
//     </>
//   );
// }
