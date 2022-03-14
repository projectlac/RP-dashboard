import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography
} from '@mui/material';

function ForgotPassword() {
  return (
    <Container maxWidth="lg">
      <Card sx={{ p: 10, mt: 10 }}>
        <Typography variant="h1" component="h1" align="center" sx={{ mb: 2 }}>
          ForgotPassword
        </Typography>
        <Typography variant="h3" component="h3" align="center">
          Content Management System
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '70ch', mb: 4 },
              '& button': { width: '61ch' },

              width: '70ch',
              mt: 10
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-password-input"
              label="New Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-password-input"
              label="Confirm New Password"
              type="password"
              autoComplete="current-password"
            />

            <Button size="large" variant="contained">
              Done
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
export default ForgotPassword;
