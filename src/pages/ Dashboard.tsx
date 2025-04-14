
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Button,
    Typography,
    Container,
    Box,
    Card,
    CardContent,
    Grid,
    IconButton,
    TextField,
} from '@mui/material';
import { logout } from '../redux/authSlice';
import { RootState, AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState('');
    const [isAddingRecipe, setIsAddingRecipe] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeInstructions, setRecipeInstructions] = useState('');
    const [recipeImageFile, setRecipeImageFile] = useState<File | null>(null);
    const [recipes, setRecipes] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [editingRecipeId, setEditingRecipeId] = useState<string | null>(null);

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
            hour12: true,
        });
        setCurrentTime(formattedTime);
    };

    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const fetchRecipes = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/recipes');
            setRecipes(res.data);
        } catch (err) {
            console.error('Failed to fetch recipes:', err);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleAddOrUpdateRecipe = async () => {
        if (recipeTitle && recipeIngredients && recipeInstructions) {
            try {
                const formData = new FormData();
                formData.append('title', recipeTitle);
                formData.append('ingredients', recipeIngredients);
                formData.append('instructions', recipeInstructions);
                if (recipeImageFile) formData.append('image', recipeImageFile);

                if (editingRecipeId) {
                    await axios.put(`http://localhost:5000/api/recipes/${editingRecipeId}`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                } else {
                    await axios.post('http://localhost:5000/api/recipes', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                }

                setIsAddingRecipe(false);
                setEditingRecipeId(null);
                setRecipeTitle('');
                setRecipeIngredients('');
                setRecipeInstructions('');
                setRecipeImageFile(null);
                fetchRecipes();
            } catch (err) {
                setError('Failed to save recipe. Please try again.');
                console.error(err);
            }
        } else {
            setError('Please fill in all fields!');
        }
    };

    const handleEdit = (recipe: any) => {
        setIsAddingRecipe(true);
        setEditingRecipeId(recipe._id);
        setRecipeTitle(recipe.title);
        setRecipeIngredients(recipe.ingredients);
        setRecipeInstructions(recipe.instructions);
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:5000/api/recipes/${id}`);
            fetchRecipes();
        } catch (err) {
            console.error('Failed to delete recipe:', err);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', p: 5, background: 'linear-gradient(to right, #f0f2f5, #e8eff4)' }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={5}>
                <Typography variant="h3" fontWeight={700} sx={{ color: '#5e35b1', fontSize: '32px' }}>
                    Welcome, {user?.username}!
                </Typography>
                <IconButton
                    color="secondary"
                    onClick={() => dispatch(logout())}
                    sx={{ fontWeight: 600, padding: '10px 20px', '&:hover': { backgroundColor: '#c51162' } }}
                >
                    Logout
                </IconButton>
            </Box>

            {/* Time */}
            <Box mb={5}>
                <Typography variant="h4" fontWeight={600} sx={{ color: '#333', fontSize: '36px', textAlign: 'center' }}>
                    Date and Time: {currentTime}
                </Typography>
            </Box>

            {/* Profile Cards */}
            <Box display="flex" justifyContent="space-between" mb={5}>
                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={600}>
                            <AccountCircleIcon sx={{ mr: 1 }} /> Profile
                        </Typography>
                        <Typography>Name: {user?.username}</Typography>
                        <Typography>Email: {user?.email}</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ width: '48%', boxShadow: 8, borderRadius: 3 }}>
                    <CardContent>
                        <Typography variant="h5" fontWeight={600}>
                            <FavoriteIcon sx={{ mr: 1 }} /> Favorites
                        </Typography>
                        <Typography>View your saved recipes.</Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Add / Edit Recipe */}
            {isAddingRecipe ? (
                <Box mb={5}>
                    <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" fontWeight={600} gutterBottom>
                                <RestaurantIcon sx={{ mr: 1 }} /> {editingRecipeId ? 'Update Recipe' : 'Add a Recipe'}
                            </Typography>
                            <TextField
                                label="Recipe Title"
                                fullWidth
                                margin="normal"
                                value={recipeTitle}
                                onChange={(e) => setRecipeTitle(e.target.value)}
                            />
                            <TextField
                                label="Ingredients"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={recipeIngredients}
                                onChange={(e) => setRecipeIngredients(e.target.value)}
                            />
                            <TextField
                                label="Instructions"
                                fullWidth
                                margin="normal"
                                multiline
                                rows={4}
                                value={recipeInstructions}
                                onChange={(e) => setRecipeInstructions(e.target.value)}
                            />
                            <TextField
                                type="file"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ accept: 'image/*' }}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.target.files?.[0];
                                    if (file) setRecipeImageFile(file);
                                }}
                            />
                            {recipeImageFile && <Typography>Selected: {recipeImageFile.name}</Typography>}
                            <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleAddOrUpdateRecipe}>
                                {editingRecipeId ? 'Update' : 'Submit'} Recipe
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                sx={{ mt: 3, ml: 2 }}
                                onClick={() => {
                                    setIsAddingRecipe(false);
                                    setEditingRecipeId(null);
                                }}
                            >
                                Cancel
                            </Button>
                            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        <RestaurantIcon sx={{ mr: 1 }} /> Recipe Feed
                                    </Typography>
                                    <Typography>Browse new recipes to try out.</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 3 }}
                                        onClick={() => navigate('/explore-recipes')}
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
                                        <FavoriteIcon sx={{ mr: 1 }} /> My Favorites
                                    </Typography>
                                    <Typography>Manage your saved recipes.</Typography>
                                    <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
                                        View Favorites
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600}>
                                        <RestaurantIcon sx={{ mr: 1 }} /> Add a Recipe
                                    </Typography>
                                    <Typography>Share your own recipe with the community.</Typography>
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

                    {/* Display Recipes */}
                    <Box mt={5}>
                        <Typography variant="h5" fontWeight={600} mb={2}>
                            Your Recipes
                        </Typography>
                        <Grid container spacing={2}>
                            {recipes.map((recipe) => (
                                <Grid item xs={12} md={4} key={recipe._id}>
                                    <Card sx={{ p: 2 }}>
                                        <Typography variant="h6">{recipe.title}</Typography>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{recipe.ingredients}</Typography>
                                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{recipe.instructions}</Typography>

                                        <Box mt={2} display="flex" justifyContent="space-between">
                                            <Button variant="outlined" color="primary" onClick={() => handleEdit(recipe)}>
                                                Edit
                                            </Button>
                                            <Button variant="outlined" color="error" onClick={() => handleDelete(recipe._id)}>
                                                Delete
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            )}
        </Box>
    );
};

export default Dashboard;

