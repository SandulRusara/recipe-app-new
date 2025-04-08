
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Container } from '@mui/material';
import { logout } from '../redux/authSlice';
import { RootState, AppDispatch } from '../redux/store';

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Container>
            <Typography variant="h5">Welcome, {user?.username}!</Typography>
            <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>Logout</Button>
        </Container>
    );
};

export default Dashboard;
