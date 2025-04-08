// import { useSelector, useDispatch } from 'react-redux';
// import { Button, Typography, Container, Box, Card, CardContent, Grid, IconButton } from '@mui/material';
// import { logout } from '../redux/authSlice';
// import { RootState, AppDispatch } from '../redux/store';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import FavoriteIcon from '@mui/icons-material/Favorite';
//
// const Dashboard = () => {
//     const user = useSelector((state: RootState) => state.auth.user);
//     const dispatch = useDispatch<AppDispatch>();
//
//     return (
//         <Box
//             sx={{
//                 minHeight: '100vh',
//                 p: 4,
//             }}
//         >
//             {/* Header */}
//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 mb={4}
//             >
//                 <Typography
//                     variant="h4"
//                     fontWeight={700}
//                     sx={{ color: '#5e35b1' }}
//                 >
//                     Welcome, {user?.username}!
//                 </Typography>
//
//                 <IconButton
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => dispatch(logout())}
//                     sx={{ fontWeight: 600 }}
//                 >
//                     Logout
//                 </IconButton>
//             </Box>
//
//             {/* User Info Section */}
//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 mb={4}
//                 alignItems="center"
//             >
//                 <Card sx={{ width: '48%', boxShadow: 3 }}>
//                     <CardContent>
//                         <Typography variant="h6" fontWeight={600} gutterBottom>
//                             <AccountCircleIcon sx={{ marginRight: 1 }} /> Profile
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                             Name: {user?.username}
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                             Email: {user?.email}
//                         </Typography>
//                     </CardContent>
//                 </Card>
//
//                 <Card sx={{ width: '48%', boxShadow: 3 }}>
//                     <CardContent>
//                         <Typography variant="h6" fontWeight={600} gutterBottom>
//                             <FavoriteIcon sx={{ marginRight: 1 }} /> Favorites
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                             View your saved recipes.
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Box>
//
//             {/* Dashboard Section */}
//             <Container>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 3 }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <RestaurantIcon sx={{ marginRight: 1 }} /> Recipe Feed
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Browse new recipes to try out.
//                                 </Typography>
//                                 <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                                     Explore Recipes
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 3 }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <FavoriteIcon sx={{ marginRight: 1 }} /> My Favorites
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Manage your saved recipes.
//                                 </Typography>
//                                 <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
//                                     View Favorites
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 3 }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Share your own recipe with the community.
//                                 </Typography>
//                                 <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                                     Add Recipe
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };
//
// export default Dashboard;

import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Container, Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import { logout } from '../redux/authSlice';
import { RootState, AppDispatch } from '../redux/store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();

    const [currentTime, setCurrentTime] = useState<string>('');

    // Function to format the date and time
    const updateTime = () => {
        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });
        setCurrentTime(formattedTime);
    };

    // Update time every second
    useEffect(() => {
        updateTime(); // Set initial time
        const interval = setInterval(updateTime, 1000); // Update time every second
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                p: 5,
                background: 'linear-gradient(to right, #f0f2f5, #e8eff4)',
            }}
        >
            {/* Header */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={5}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{ color: '#5e35b1', fontSize: '32px' }}
                >
                    Welcome, {user?.username}!
                </Typography>

                <IconButton
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(logout())}
                    sx={{
                        fontWeight: 600,
                        padding: '10px 20px',
                        '&:hover': {
                            backgroundColor: '#c51162',
                        },
                    }}
                >
                    Logout
                </IconButton>
            </Box>

            {/* Live Date and Time */}
            <Box mb={5}>
                <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{ color: '#333', fontSize: '36px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
                >
                     Date and Time: {currentTime}
                </Typography>
            </Box>

            {/* User Info Section */}
            <Box
                display="flex"
                justifyContent="space-between"
                mb={5}
                alignItems="center"
            >
                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            <AccountCircleIcon sx={{ marginRight: 1 }} /> Profile
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Name: {user?.username}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Email: {user?.email}
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            <FavoriteIcon sx={{ marginRight: 1 }} /> Favorites
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            View your saved recipes.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Dashboard Section */}
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    <RestaurantIcon sx={{ marginRight: 1 }} /> Recipe Feed
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Browse new recipes to try out.
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#1976d2' } }}>
                                    Explore Recipes
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    <FavoriteIcon sx={{ marginRight: 1 }} /> My Favorites
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Manage your saved recipes.
                                </Typography>
                                <Button variant="contained" color="secondary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#d81b60' } }}>
                                    View Favorites
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Share your own recipe with the community.
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#1976d2' } }}>
                                    Add Recipe
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Dashboard;
