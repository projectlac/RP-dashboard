import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const nav = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem('access_token', '123456');
    nav('/dashboards');
  };

  return (
    <Container maxWidth="lg">
      <Card sx={{ p: { md: 10, xs: 3 }, mt: 10 }}>
        <Typography variant="h1" component="h1" align="center" sx={{ mb: 2 }}>
          Login
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
              '& .MuiTextField-root': {
                width: { md: '70ch', xs: '100%' },
                mb: 4
              },
              '& button': { width: { md: '61ch', xs: '100%' }, height: '53px' },

              width: { md: '70ch', xs: '100%' },
              mt: 10
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              id="outlined-username-input"
              label="Username"
              type="text"
              {...register('username')}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
            />
            <Typography textAlign={'right'} sx={{ mb: { md: 10, xs: 5 } }}>
              <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                Forgot Password?
              </Link>
            </Typography>
            <Button size="large" variant="contained" type="submit">
              LOGIN
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
export default Login;
