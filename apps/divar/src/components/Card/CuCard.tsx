import { Card, CardProps } from '@mui/material';
import { FC } from 'react';
type Props = CardProps;

export const CuCard: FC<Props> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};
