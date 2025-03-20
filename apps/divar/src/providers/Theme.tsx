import { FC, ReactNode } from 'react';
import { extendTheme, ThemeProvider } from '@mui/material/styles';

interface Props {
  children: ReactNode;
}
const Theme: FC<Props> = ({ children }) => {
  const theme = extendTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
