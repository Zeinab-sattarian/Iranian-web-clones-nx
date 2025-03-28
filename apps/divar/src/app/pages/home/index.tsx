import { Box, Grid, Stack, useColorScheme } from '@mui/material';

import { useEffect } from 'react';
import Adcard from './AdCard';
import AdCard from './AdCard';

const Home = () => {
  const { setMode, mode } = useColorScheme();
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default',
        overflow: 'hidden', //no scrolling
      }}
    >
      <Stack>
        <Box
          component={'nav'}
          sx={{ width: '100%', height: '64px', backgroundColor: 'green' }}
        >
          Nav
        </Box>
        <Stack
          direction={'row'}
          sx={{
            px: '32px',
            backgroundColor: 'red',
            pt: '32px',
            height: 'calc(100vh - 64px)', // added in order to have the overflowY work
          }} //pt: top px: left and right
        >
          <Box
            sx={{
              width: '100%',
              padding: '20px',
              backgroundColor: 'blue',
              overflowY: 'auto', //allows scrolling
              //overflow only starts working when we have a predefined height
            }}
          >
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => (
                <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                  <AdCard />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              width: '280px',
              backgroundColor: 'yellow',
            }}
          >
            Sidebar
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
