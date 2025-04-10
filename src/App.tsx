import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Switch, Box, AppBar, Toolbar, Typography } from '@mui/material';
import SignupPage from './pages/SignupPage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Dashboard from './pages/ Dashboard';
import LoginPage from "./pages/ LoginPage.tsx";
import ExploreRecipes from "./pages/ExploreRecipes.tsx";
import RecipeDetails from "./components/RecipeDetails.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";



const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#90caf9' : '#1976d2',
            },
            secondary: {
                main: darkMode ? '#f48fb1' : '#f50057',
            },
        },
    });


    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };


    if (isAuthenticated === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {/*Dashboard*/}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body1" sx={{ marginRight: 1 }}>Dark Mode</Typography>
                        <Switch checked={darkMode} onChange={handleThemeToggle} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/explore-recipes" element={<ExploreRecipes />} />
                <Route path="/recipe-details" element={<RecipeDetails />} /> {/* Recipe details page route */}


            </Routes>
        </ThemeProvider>
    );
};

export default App;






