//
// import { useSelector, useDispatch } from 'react-redux';
// import { Button, Typography, Container, Box, Card, CardContent, Grid, IconButton } from '@mui/material';
// import { logout } from '../redux/authSlice';
// import { RootState, AppDispatch } from '../redux/store';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useState, useEffect } from 'react';
//
// const Dashboard = () => {
//     const user = useSelector((state: RootState) => state.auth.user);
//     const dispatch = useDispatch<AppDispatch>();
//
//     const [currentTime, setCurrentTime] = useState<string>('');
//
//     // Function to format the date and time
//     const updateTime = () => {
//         const now = new Date();
//         const formattedTime = now.toLocaleString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric',
//             hour12: true
//         });
//         setCurrentTime(formattedTime);
//     };
//
//     // Update time every second
//     useEffect(() => {
//         updateTime(); // Set initial time
//         const interval = setInterval(updateTime, 1000); // Update time every second
//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);
//
//     return (
//         <Box
//             sx={{
//                 minHeight: '100vh',
//                 p: 5,
//                 background: 'linear-gradient(to right, #f0f2f5, #e8eff4)',
//             }}
//         >
//             {/* Header */}
//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 mb={5}
//             >
//                 <Typography
//                     variant="h3"
//                     fontWeight={700}
//                     sx={{ color: '#5e35b1', fontSize: '32px' }}
//                 >
//                     Welcome, {user?.username}!
//                 </Typography>
//
//                 <IconButton
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => dispatch(logout())}
//                     sx={{
//                         fontWeight: 600,
//                         padding: '10px 20px',
//                         '&:hover': {
//                             backgroundColor: '#c51162',
//                         },
//                     }}
//                 >
//                     Logout
//                 </IconButton>
//             </Box>
//
//             {/* Live Date and Time */}
//             <Box mb={5}>
//                 <Typography
//                     variant="h4"
//                     fontWeight={600}
//                     sx={{ color: '#333', fontSize: '36px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
//                 >
//                      Date and Time: {currentTime}
//                 </Typography>
//             </Box>
//
//             {/* User Info Section */}
//             <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 mb={5}
//                 alignItems="center"
//             >
//                 <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
//                     <CardContent>
//                         <Typography variant="h5" fontWeight={600} gutterBottom>
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
//                 <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
//                     <CardContent>
//                         <Typography variant="h5" fontWeight={600} gutterBottom>
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
//                 <Grid container spacing={4}>
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <RestaurantIcon sx={{ marginRight: 1 }} /> Recipe Feed
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Browse new recipes to try out.
//                                 </Typography>
//                                 <Button variant="contained" color="primary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#1976d2' } }}>
//                                     Explore Recipes
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <FavoriteIcon sx={{ marginRight: 1 }} /> My Favorites
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Manage your saved recipes.
//                                 </Typography>
//                                 <Button variant="contained" color="secondary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#d81b60' } }}>
//                                     View Favorites
//                                 </Button>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//
//                     <Grid item xs={12} sm={6} md={4}>
//                         <Card sx={{ boxShadow: 10, borderRadius: 3, '&:hover': { transform: 'scale(1.05)', boxShadow: 16, transition: '0.3s ease-in-out' } }}>
//                             <CardContent>
//                                 <Typography variant="h6" fontWeight={600}>
//                                     <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     Share your own recipe with the community.
//                                 </Typography>
//                                 <Button variant="contained" color="primary" sx={{ mt: 3, padding: '12px 30px', fontSize: '16px', '&:hover': { backgroundColor: '#1976d2' } }}>
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

//
// import { useSelector, useDispatch } from 'react-redux';
// import { Button, Typography, Container, Box, Card, CardContent, Grid, IconButton, TextField } from '@mui/material';
// import { logout } from '../redux/authSlice';
// import { RootState, AppDispatch } from '../redux/store';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const Dashboard = () => {
//     const user = useSelector((state: RootState) => state.auth.user);
//     const dispatch = useDispatch<AppDispatch>();
//
//     const [currentTime, setCurrentTime] = useState<string>('');
//     const [isAddingRecipe, setIsAddingRecipe] = useState<boolean>(false);
//     const [recipeTitle, setRecipeTitle] = useState<string>('');
//     const [recipeIngredients, setRecipeIngredients] = useState<string>('');
//     const [recipeInstructions, setRecipeInstructions] = useState<string>('');
//     const [error, setError] = useState<string | null>(null);
//
//     // Function to format the date and time
//     const updateTime = () => {
//         const now = new Date();
//         const formattedTime = now.toLocaleString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric',
//             hour12: true
//         });
//         setCurrentTime(formattedTime);
//     };
//
//     // Update time every second
//     useEffect(() => {
//         updateTime(); // Set initial time
//         const interval = setInterval(updateTime, 1000); // Update time every second
//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);
//
//     const handleAddRecipe = async () => {
//         if (recipeTitle && recipeIngredients && recipeInstructions) {
//             try {
//                 // Make an API call to add the recipe
//                 const response = await axios.post('http://localhost:5000/api/recipes', {
//                     title: recipeTitle,
//                     ingredients: recipeIngredients,
//                     instructions: recipeInstructions,
//                 });
//
//                 console.log('Recipe Added:', response.data);
//                 setIsAddingRecipe(false); // Close the form after successful submission
//             } catch (err) {
//                 setError('Failed to add recipe. Please try again.');
//                 console.error(err);
//             }
//         } else {
//             setError('Please fill in all fields!');
//         }
//     };
//
//     return (
//         <Box
//             sx={{
//                 minHeight: '100vh',
//                 p: 5,
//                 background: 'linear-gradient(to right, #f0f2f5, #e8eff4)',
//             }}
//         >
//             {/* Header */}
//             <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
//                 <Typography variant="h3" fontWeight={700} sx={{ color: '#5e35b1', fontSize: '32px' }}>
//                     Welcome, {user?.username}!
//                 </Typography>
//
//                 <IconButton
//                     variant="contained"
//                     color="secondary"
//                     onClick={() => dispatch(logout())}
//                     sx={{
//                         fontWeight: 600,
//                         padding: '10px 20px',
//                         '&:hover': {
//                             backgroundColor: '#c51162',
//                         },
//                     }}
//                 >
//                     Logout
//                 </IconButton>
//             </Box>
//
//             {/* Live Date and Time */}
//             <Box mb={5}>
//                 <Typography
//                     variant="h4"
//                     fontWeight={600}
//                     sx={{ color: '#333', fontSize: '36px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}
//                 >
//                     Date and Time: {currentTime}
//                 </Typography>
//             </Box>
//
//             {/* User Info Section */}
//             <Box display="flex" justifyContent="space-between" mb={5} alignItems="center">
//                 <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
//                     <CardContent>
//                         <Typography variant="h5" fontWeight={600} gutterBottom>
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
//                 <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
//                     <CardContent>
//                         <Typography variant="h5" fontWeight={600} gutterBottom>
//                             <FavoriteIcon sx={{ marginRight: 1 }} /> Favorites
//                         </Typography>
//                         <Typography variant="body1" color="textSecondary">
//                             View your saved recipes.
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Box>
//
//             {/* Add Recipe Form */}
//             {isAddingRecipe ? (
//                 <Box mb={5}>
//                     <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
//                         <CardContent>
//                             <Typography variant="h5" fontWeight={600} gutterBottom>
//                                 <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
//                             </Typography>
//
//                             <TextField
//                                 label="Recipe Title"
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 value={recipeTitle}
//                                 onChange={(e) => setRecipeTitle(e.target.value)}
//                             />
//                             <TextField
//                                 label="Ingredients"
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 multiline
//                                 rows={4}
//                                 value={recipeIngredients}
//                                 onChange={(e) => setRecipeIngredients(e.target.value)}
//                             />
//                             <TextField
//                                 label="Instructions"
//                                 variant="outlined"
//                                 fullWidth
//                                 margin="normal"
//                                 multiline
//                                 rows={4}
//                                 value={recipeInstructions}
//                                 onChange={(e) => setRecipeInstructions(e.target.value)}
//                             />
//
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 sx={{ mt: 3 }}
//                                 onClick={handleAddRecipe}
//                             >
//                                 Submit Recipe
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 color="secondary"
//                                 sx={{ mt: 3, ml: 2 }}
//                                 onClick={() => setIsAddingRecipe(false)}
//                             >
//                                 Cancel
//                             </Button>
//
//                             {error && (
//                                 <Typography variant="body2" color="error" sx={{ mt: 2 }}>
//                                     {error}
//                                 </Typography>
//                             )}
//                         </CardContent>
//                     </Card>
//                 </Box>
//             ) : (
//                 <Container>
//                     <Grid container spacing={4}>
//                         {/* Existing Cards (Recipe Feed, Favorites, etc.) */}
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
//                                 <CardContent>
//                                     <Typography variant="h6" fontWeight={600}>
//                                         <RestaurantIcon sx={{ marginRight: 1 }} /> Recipe Feed
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary">
//                                         Browse new recipes to try out.
//                                     </Typography>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         sx={{ mt: 3 }}
//                                     >
//                                         Explore Recipes
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
//                                 <CardContent>
//                                     <Typography variant="h6" fontWeight={600}>
//                                         <FavoriteIcon sx={{ marginRight: 1 }} /> My Favorites
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary">
//                                         Manage your saved recipes.
//                                     </Typography>
//                                     <Button
//                                         variant="contained"
//                                         color="secondary"
//                                         sx={{ mt: 3 }}
//                                     >
//                                         View Favorites
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
//                                 <CardContent>
//                                     <Typography variant="h6" fontWeight={600}>
//                                         <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary">
//                                         Share your own recipe with the community.
//                                     </Typography>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         sx={{ mt: 3 }}
//                                         onClick={() => setIsAddingRecipe(true)}
//                                     >
//                                         Add Recipe
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             )}
//         </Box>
//     );
// };
//
// export default Dashboard;





import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography, Container, Box, Card, CardContent, Grid, IconButton, TextField } from '@mui/material';
import { logout } from '../redux/authSlice';
import { RootState, AppDispatch } from '../redux/store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();

    const [currentTime, setCurrentTime] = useState<string>('');
    const [isAddingRecipe, setIsAddingRecipe] = useState<boolean>(false);
    const [recipeTitle, setRecipeTitle] = useState<string>('');
    const [recipeIngredients, setRecipeIngredients] = useState<string>('');
    const [recipeInstructions, setRecipeInstructions] = useState<string>('');
    const [recipeImageUrl, setRecipeImageUrl] = useState<string>('');
    const [error, setError] = useState<string | null>(null);


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


    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    const handleAddRecipe = async () => {
        if (recipeTitle && recipeIngredients && recipeInstructions && recipeImageUrl) {
            try {

                const response = await axios.post('http://localhost:5000/api/recipes', {
                    title: recipeTitle,
                    ingredients: recipeIngredients,
                    instructions: recipeInstructions,
                    imageUrl: recipeImageUrl,
                });

                console.log('Recipe Added:', response.data);
                setIsAddingRecipe(false);
            } catch (err) {
                setError('Failed to add recipe. Please try again.');
                console.error(err);
            }
        } else {
            setError('Please fill in all fields!');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                p: 5,
                background: 'linear-gradient(to right, #f0f2f5, #e8eff4)',
            }}
        >
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
                <Typography variant="h3" fontWeight={700} sx={{ color: '#5e35b1', fontSize: '32px' }}>
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
            <Box display="flex" justifyContent="space-between" mb={5} alignItems="center">
                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
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

                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
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

            {/* Add Recipe Form */}
            {isAddingRecipe ? (
                <Box mb={5}>
                    <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                                <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
                            </Typography>

                            <TextField
                                label="Recipe Title"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={recipeTitle}
                                onChange={(e) => setRecipeTitle(e.target.value)}
                            />
                            <TextField
                                label="Ingredients"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={recipeIngredients}
                                onChange={(e) => setRecipeIngredients(e.target.value)}
                            />
                            <TextField
                                label="Instructions"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={recipeInstructions}
                                onChange={(e) => setRecipeInstructions(e.target.value)}
                            />
                            <TextField
                                label="Recipe Image URL"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={recipeImageUrl}
                                onChange={(e) => setRecipeImageUrl(e.target.value)}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3 }}
                                onClick={handleAddRecipe}
                            >
                                Submit Recipe
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                sx={{ mt: 3, ml: 2 }}
                                onClick={() => setIsAddingRecipe(false)}
                            >
                                Cancel
                            </Button>

                            {error && (
                                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                                    {error}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <Container>
                    <Grid container spacing={4}>
                        {/* Other cards (Recipe Feed, Favorites, etc.) */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        <RestaurantIcon sx={{ marginRight: 1 }} /> Recipe Feed
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Browse new recipes to try out.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 3 }}
                                    >
                                        Explore Recipes
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        <FavoriteIcon sx={{ marginRight: 1 }} /> My Favorites
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Manage your saved recipes.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        sx={{ mt: 3 }}
                                    >
                                        View Favorites
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        <RestaurantIcon sx={{ marginRight: 1 }} /> Add a Recipe
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Share your own recipe with the community.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 3 }}
                                        onClick={() => setIsAddingRecipe(true)}
                                    >
                                        Add Recipe
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    );
};

export default Dashboard;

