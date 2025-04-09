
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const dummyRecipes = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        cookingTime: '20 minutes',
        image: 'src/assets/img.png',
        rating: 4.5,
    },
    {
        id: 2,
        title: 'Chicken Alfredo',
        cookingTime: '30 minutes',
        image: 'src/assets/img_1.png',
        rating: 4.7,
    },
    {
        id: 3,
        title: 'Grilled Cheese Sandwich',
        cookingTime: '10 minutes',
        image: 'src/assets/sandwich.png',
        rating: 4.2,
    },
    {
        id: 4,
        title: 'Caesar Salad',
        cookingTime: '15 minutes',
        image: 'src/assets/salad.png',
        rating: 4.6,
    },
];

const ExploreRecipes = () => {
    return (
        <Box sx={{ p: 5 }}>
            <Typography variant="h3" fontWeight={700} sx={{ color: '#5e35b1', mb: 4 }}>
                Explore Recipes
            </Typography>

            <Grid container spacing={4}>
                {dummyRecipes.map((recipe) => (
                    <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                        <Card sx={{ boxShadow: 10, borderRadius: 3 }}>
                            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: '3px 3px 0 0' }} />
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
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
