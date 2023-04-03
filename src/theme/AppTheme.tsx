import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppThemeProps } from '../interfaces/interfaces';
import { theme } from './';

export const AppTheme = ({children} : AppThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
