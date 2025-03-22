import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface Props extends ButtonProps {
  customProp?: string;
}
export const CuButton: FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
