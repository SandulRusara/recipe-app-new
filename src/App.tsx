import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Switch, Box, AppBar, Toolbar, Typography } from '@mui/material';
import SignupPage from './pages/SignupPage';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Dashboard from './pages/ Dashboard';
import LoginPage from "./pages/ LoginPage.tsx";







const App = () => {
    const [darkMode, setDarkMode] = useState(false); // State for theme toggle
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    // Create theme with light and dark modes
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#90caf9' : '#1976d2', // Light Blue for dark mode
            },
            secondary: {
                main: darkMode ? '#f48fb1' : '#f50057', // Pink for dark mode
            },
        },
    });

    // Toggle the theme
    const handleThemeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    // Ensure that the app waits for the authentication state before rendering
    if (isAuthenticated === undefined) {
        // Optionally, show a loading spinner or any fallback UI here
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

            </Routes>
        </ThemeProvider>
    );
};

export default App;
