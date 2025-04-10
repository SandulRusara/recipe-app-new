
import { useLocation, Link } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const RecipeDetails = () => {
    const location = useLocation();
    const recipe = location.state?.recipe;

    if (!recipe) {
        return <Typography variant="h6" color="error">Recipe not found.</Typography>;
    }

    return (
        <Box sx={{ p: 5 }}>
            <Link to="/explore-recipes" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="secondary">Back to Recipes</Button>
            </Link>

            <Card sx={{ boxShadow: 10, borderRadius: 3, mt: 4 }}>
                <img src={recipe.image} alt={recipe.title} style={{ width: '20%', borderRadius: '3px 3px 0 0' }} />
                <CardContent>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        {recipe.title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        Cooking Time: {recipe.cookingTime}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Rating: {recipe.rating} ★
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>Ingredients:</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        {recipe.ingredients}
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>Instructions:</Typography>
                    <Typography variant="body1">
                        {recipe.instructions}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecipeDetails;

