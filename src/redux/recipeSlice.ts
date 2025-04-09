import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface RecipeModel {
    title: string;
    ingredients: string;
    instructions: string;
    imageUrl: string;
}

export const saveRecipe = createAsyncThunk(
    'recipe/saveRecipe',
    async (recipe: RecipeModel) => {
        try {
            const response = await axios.post('http://localhost:5000/api/recipes', {
                title: recipe.title,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                imageUrl: recipe.imageUrl,
            });
            return response.data;
        } catch (error) {
            console.error('Error saving recipe:', error);
            throw error;
        }
    }
);
