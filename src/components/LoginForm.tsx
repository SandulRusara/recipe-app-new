import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import {User} from "../types/ User.ts";


const LoginForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

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
    localStorage.setItem('users', JSON.stringify([
        {
            email: "sanu@gmail.com",
            password: "123"
        }
    ]));

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField label="Email" name="email" fullWidth required onChange={handleChange} />
            <TextField label="Password" name="password" type="password" fullWidth required onChange={handleChange} />
            <Button type="submit" variant="contained">Login</Button>
        </Box>
    );
};

export default LoginForm;
