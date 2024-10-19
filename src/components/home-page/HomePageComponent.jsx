import { Box,Typography, Button  } from '@mui/material'; 

const HomePageComponent = () =>{
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F4DFD0',
          padding: '20px 50px',
        }}
      >
        <header
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Brush Script MT, cursive',
              color: '#b9774f',
            }}
          >
            ChicVibe
          </Typography>
          <div>
  {['About', 'Contact', 'Card', 'Favorite'].map((link) => (
    <span
      key={link}
      onClick={() => console.log(`${link} clicked`)} 
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#333',
        margin: '0 15px',
        textTransform: 'uppercase',
        fontSize: '14px',
      }}
    >
      {link}
    </span>
  ))}

  <Button
    variant="contained"
    onClick={() => console.log('Log in clicked')} 
    sx={{
      backgroundColor: '#b9774f',
      color: '#fff',
      textTransform: 'uppercase',
      borderRadius: '5px',
      padding: '10px 20px',
      marginLeft: '20px',
    }}
  >
    Log in
  </Button>
</div>
        </header>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#f8ede4',
              padding: '40px',
              width: '100%',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Brush Script MT, cursive',
                color: '#b9774f',
                fontSize: '42px',
              }}
            >
              Hey, ChicVibe!
            </Typography>
            <Typography
              sx={{
                color: '#333',
                fontSize: '18px',
                fontFamily: 'Georgia, Times, serif',
                lineHeight: 1.6,
                margin: '20px 0',
              }}
            >
              Need more hours to have a shopping in your day?
            </Typography>
            <Typography
              sx={{
                color: '#333',
                fontSize: '18px',
                fontFamily: 'Georgia, Times, serif',
                lineHeight: 1.6,
                margin: '20px 0',
              }}
            >
              Stylish and fashionable with a modern, trendy, and youthful feel.!
            </Typography>
            <Button
              className="learn-more-button"
              sx={{
                backgroundColor: '#d68c6a',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '45vw',
          height: '100vh',
          marginLeft: 'auto',
        }}
      >
       <Box
  sx={{
    backgroundImage: 'url("this.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  }}
  aria-label="Woman with coffee"
/>
    </Box>
    </Box>
  );
}

export default HomePageComponent;