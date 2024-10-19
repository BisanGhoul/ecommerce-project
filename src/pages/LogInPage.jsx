import { Box } from '@mui/material';
import LogIn from '../components/log-in/LogIn'; 
import Header from '../components/header/Header'; 

const LogInPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', 
        backgroundColor: '#f0f2f5', 
      }}
    >
      <Header /> 
      <LogIn />
    </Box>
  );
};

export default LogInPage;
