

import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Alert,
    Typography,
    Paper,
    InputAdornment,
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { User } from "../types/ User.ts";

const LoginForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    React.useEffect(() => {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (existingUsers.length === 0) {
            const defaultUser = {
                email: 'sanu@gmail.com',
                password: '123'
            };
            localStorage.setItem('users', JSON.stringify([defaultUser]));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (existingUser) {
            dispatch(login(existingUser));
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <Box
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
                background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
                padding: 4,
            }}
        >
            <Paper
                elevation={12}
                sx={{
                    p: 6,
                    borderRadius: 6,
                    maxWidth: 500,
                    width: '100%',
                    background: 'linear-gradient(135deg, #ffffff, #f7f4fc)',
                    boxShadow: '0px 8px 30px rgba(0,0,0,0.15)',
                }}
            >
                <Typography
                    variant="h3"
                    fontWeight={700}
                    align="center"
                    mb={3}
                    sx={{ color: '#5e35b1', fontFamily: 'Poppins, sans-serif' }}
                >
                    Log In
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    gap={3}
                >
                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        required
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        required
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                            mt: 1,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            background: 'linear-gradient(to right, #ff512f, #dd2476)',
                            color: '#fff',
                            borderRadius: 3,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.03)',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                            },
                        }}
                    >
                        Log In
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginForm;

