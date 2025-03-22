import { Theme } from '@mui/material';

export const MuiButtonOverRide: Theme['components'] = {
  MuiButton: {
    styleOverrides: {
      root: { textTransform: 'none' },
    },
  },
};
