import { CircularProgress, CircularProgressProps } from '@mui/material';
import { FC, ReactNode } from 'react';
interface Props extends CircularProgressProps {
  children?: ReactNode;
}

export const CircularLoading: FC<Props> = ({ children, ...props }) => {
  return <CircularProgress {...props} />;
};
