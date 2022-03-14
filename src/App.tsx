import { useRoutes } from 'react-router-dom';
import routes from './router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

const App = () => {
  const isLogin = Boolean(localStorage.getItem('access_token'));
  const content = useRoutes(routes(isLogin));

  const iframe = document.getElementsByTagName('iframe');
  useEffect(() => {
    iframe[0] && iframe[0].remove();
  }, [iframe]);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
