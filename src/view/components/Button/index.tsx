import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface Props {
  isOutlined?: boolean;
  isBack?: boolean;
}

const HomeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '1.4rem',
  borderRadius: '5rem',
  minWidth: '100%',
  border: '2px solid',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  position: 'relative',
  padding: '2rem',
  boxSizing: 'border-box',
  backgroundClip: 'padding-box',


  '&:hover': {
  },
}));

const StyledBackButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '1.4rem',
  borderRadius: '5rem',
  padding: '8px 16px',
  minWidth: '11rem',
  border: '1px solid',
  borderColor: '#E6007A',
  backgroundColor: 'transparent',

  '&:hover': {
    backgroundColor: '#E6007A',
    border: '1px solid',
  },
}));

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'uppercase',
  color: '#E6007A',
  fontSize: '1.4rem',
  borderRadius: '5rem',
  padding: '8px 24px',
  minWidth: '10rem',
  border: '1px solid',
  backgroundColor: '#e6007b2f',

  '&:hover': {
    backgroundColor: '#e6007b83',
    color: 'white',
    border: '1px solid #c00569 ',
  },
}));

export default function CustomizedButtons() {
  return (
    <>
      <Stack spacing={4} direction="column" m={8}>
        <HomeButton variant="contained" size="large">
          TOKEN | PSP22
        </HomeButton>
        <HomeButton variant="contained" size="large">
          NFT | PSP34
        </HomeButton>
        <HomeButton variant="contained" size="large">
          MULTITOKEN | PSP37
        </HomeButton>
      </Stack>
      <Stack spacing={4} direction="row" m={3}>
        <StyledBackButton variant="outlined" size="large">
          <ArrowBackRoundedIcon fontSize="medium" /> Back
        </StyledBackButton>
        <StyledButton variant="contained" size="large" disabled>
          Next
        </StyledButton>
        <StyledButton variant="contained" size="large">
          Next
        </StyledButton>
        <StyledButton variant="contained" size="large">
          🚀 Deploy your contract
        </StyledButton>
      </Stack>
    </>
  );
}
