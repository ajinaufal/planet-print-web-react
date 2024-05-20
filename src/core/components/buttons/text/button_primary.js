import { Button } from '@mui/material';

export function ButtonTextPrimary({ children, className, onClick = () => {} }) {
  return (
    <Button
      variant="text"
      className={'text-foreground-negative-primary ' + className}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}
