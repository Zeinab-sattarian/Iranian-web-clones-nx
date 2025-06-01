import { Box } from '@mui/material';
import AdCard from './AdCard';
import { items } from './AdDetails';

const AdsDisplay = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        backgroundColor: '#1e1e1e',
        padding: 2,
      }}
    >
      {items.map((item) => (
        <AdCard key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default AdsDisplay;
