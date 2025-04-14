

import { Container, Typography } from '@mui/material';
import SignupForm from '../components/SignupForm';

const SignupPage = () => (
    <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">Signup</Typography>
        <SignupForm />
    </Container>
);

export default SignupPage;
