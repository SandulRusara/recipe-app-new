import React, { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {User} from "../types/ User.ts";


const SignupForm = () => {
    const [form, setForm] = useState({ email: '', password: '', username: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some((u) => u.email === form.email);

        if (userExists) {
            setError('User already exists');
        } else {
            const newUser: User = { ...form, favorites: [] };
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
            navigate('/login');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField label="Username" name="username" fullWidth required onChange={handleChange} />
            <TextField label="Email" name="email" fullWidth required onChange={handleChange} />
            <TextField label="Password" name="password" type="password" fullWidth required onChange={handleChange} />
            <Button type="submit" variant="contained">Signup</Button>
        </Box>
    );
};

export default SignupForm;
