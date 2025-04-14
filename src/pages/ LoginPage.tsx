

import { Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
    <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">Login</Typography>
        <LoginForm />
    </Container>
);

export default LoginPage;
