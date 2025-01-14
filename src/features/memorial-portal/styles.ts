import { Theme } from '@mui/material/styles';

export const styles = {
  root: {
    maxWidth: 600,
    margin: '0 auto',
    padding: (theme: Theme) => theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    marginBottom: (theme: Theme) => theme.spacing(2),
  },
  slideShowButton: {
    backgroundColor: 'rgb(246, 206, 157)',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(236, 196, 147)',
    },
  },
};
