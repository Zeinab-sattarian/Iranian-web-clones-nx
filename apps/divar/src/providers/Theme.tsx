import { FC, ReactNode } from 'react';
import { extendTheme, ThemeProvider } from '@mui/material/styles';
import { MuiButtonOverRide, MuiCircularLoadingOverRide } from '../components';
import { CssBaseline } from '@mui/material';

interface Props {
  children: ReactNode;
}
const Theme: FC<Props> = ({ children }) => {
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

export default Theme;
