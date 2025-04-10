import { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const dummyRecipes = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        cookingTime: '20 minutes',
        image: 'src/assets/img.png',
        rating: 4.5,
        ingredients: 'Spaghetti, eggs, pancetta, parmesan, black pepper',
        instructions: 'Cook pasta, fry pancetta, mix with egg and parmesan, combine with pasta.',
    },
    {
        id: 2,
        title: 'Chicken Alfredo',
        cookingTime: '30 minutes',
        image: 'src/assets/img_2.png',
        rating: 4.7,
        ingredients: 'Chicken breast, garlic, cream, butter, parmesan',
        instructions: 'Cook chicken, make alfredo sauce, combine with pasta.',
    },
    {
        id: 3,
        title: 'Grilled Cheese Sandwich',
        cookingTime: '10 minutes',
        image: 'src/assets/sandwich.png',
        rating: 4.2,
        ingredients: 'Bread, cheese, butter',
        instructions: 'Butter bread, add cheese, grill until golden brown.',
    },
    {
        id: 4,
        title: 'Caesar Salad',
        cookingTime: '15 minutes',
        image: 'src/assets/salad.png',
        rating: 4.6,
        ingredients: 'Lettuce, croutons, parmesan, caesar dressing',
        instructions: 'Toss lettuce with dressing, top with croutons and parmesan.',
    },
];

const ExploreRecipes = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState(dummyRecipes);

    useEffect(() => {
        axios.get('http://localhost:5000/api/recipes')
            .then((res) => {
                if (res.data && Array.isArray(res.data)) {
                    setRecipes(res.data);
                }
            })
            .catch((err) => {
                console.error('API error:', err);
                setRecipes(dummyRecipes);
            });
    }, []);

    const handleViewRecipe = (recipe: any) => {
        navigate('/recipe-details', { state: { recipe } });
    };

    const handleBackToDashboard = () => {
        navigate('/');
    };

    return (
        <Box sx={{ p: 5 }}>
            <Typography variant="h3" fontWeight={700} sx={{ color: '#5e35b1', mb: 4 }}>
                Explore Recipes
            </Typography>

            <Button variant="outlined" color="secondary" sx={{ mb: 4 }} onClick={handleBackToDashboard}>
                Back to Dashboard
            </Button>

            <Grid container spacing={4}>
                {recipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                style={{ width: '100%', borderRadius: '3px 3px 0 0' }}
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    {recipe.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Cooking Time: {recipe.cookingTime}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rating: {recipe.rating} ★
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2 }}
                                    onClick={() => handleViewRecipe(recipe)}
                                >
                                    View Recipe
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ExploreRecipes;











