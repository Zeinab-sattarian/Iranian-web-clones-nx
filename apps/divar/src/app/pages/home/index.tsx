import { CuButton } from '@divar/components';
import { Box, Stack, useColorScheme } from '@mui/material';
import { useEffect } from 'react';

const Home = () => {
  const { setMode, mode } = useColorScheme();
  useEffect(() => {
    console.log(mode);
  }, [mode]);
  return (
    <Box
      sx={{ width: '100vw', height: '100vh', bgcolor: 'background.default' }}
    >
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CuButton
          variant="contained"
          onClick={() => {
            setMode(mode === 'light' ? 'dark' : 'light');
          }}
        >
          {mode === 'light' ? 'Dark' : 'Light'} Mode
        </CuButton>
      </Stack>
    </Box>
  );
};

export default Home;
