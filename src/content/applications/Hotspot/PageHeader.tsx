import { Typography, Grid } from '@mui/material';
import Add from './Add';

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Façade A - Hotspot
        </Typography>
      </Grid>
      <Grid item>
        <Add />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
