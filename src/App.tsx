import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './theme';
import { AppRoutes } from './routes';
import { AppContextProvider } from './context/AppContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </AppContextProvider>
    </I18nextProvider>
  );
}

export default App;
