import { CuCard } from '@divar/components';
import { Box, Typography } from '@mui/material';

interface AdCardProps {
  id?: number;
  image: string;
  title: string;
  specs: string;
  price: number;
  location: string;
  pinned: boolean;
}

const AdCard = ({
  id,
  image,
  title,
  specs,
  price,
  location,
  pinned,
}: AdCardProps) => {
  return (
    <CuCard
      sx={{ height: '184px', padding: '16px', backgroundColor: 'orange' }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontWeight={600}>{title}</Typography>
        <Typography fontSize={14}>{specs}</Typography>
        <Typography fontSize={14}>
          {price.toLocaleString('fa-IR')} تومان
        </Typography>
        <Typography fontSize={13} color={pinned ? 'red' : 'gray'}>
          {pinned ? 'نردبان شده - ' : ''}
          {location}
        </Typography>
      </Box>
    </CuCard>
  );
};

export default AdCard;
