import { FC, ReactNode } from 'react';
import { extendTheme, ThemeProvider } from '@mui/material/styles';
import {
  MuiButtonOverRide,
  MuiCircularLoadingOverRide,
} from '@divar/components';
import { CssBaseline } from '@mui/material';

interface Props {
  children: ReactNode;
}
export const Theme: FC<Props> = ({ children }) => {
  const theme = extendTheme({
    colorSchemes: {
      dark: true,
    },
    components: {
      MuiButton: MuiButtonOverRide?.MuiButton,
      MuiCircularProgress: MuiCircularLoadingOverRide?.MuiCircularProgress,
    },
  });
  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
