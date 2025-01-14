import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Container, Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Funeral Service Organization
          </Typography>
        </Toolbar>
        <Tabs 
          value={location.pathname} 
          onChange={handleTabChange}
          sx={{ 
            backgroundColor: '#e8f4f4',
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 100,
            }
          }}
        >
          <Tab label="Planung" value="/" />
          <Tab label="Preisinfomation" value="/pricing" />
          <Tab label="Kontakt" value="/contact" />
          <Tab label="Gedenkportal" value="/memorial" />
        </Tabs>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
