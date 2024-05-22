import { Button } from '@mui/material';

export function ButtonContainedSecondary({ className, children, onClick = () => {} }) {
  return (
    <Button
      variant="contained"
      className={'bg-target-secondary-hover text-target-primary-default ' + className}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}