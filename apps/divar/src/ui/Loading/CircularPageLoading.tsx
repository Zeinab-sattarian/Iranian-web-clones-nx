import { Box, Stack } from '@mui/material';
import { CircularLoading } from '@divar/components';

export const CircularPageLoading = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularLoading size={'5rem'} />
      </Stack>
    </Box>
  );
};
