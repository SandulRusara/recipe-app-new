// // src/pages/AuthPage.tsx
// import React, { useState } from 'react';
// import { Container, Tabs, Tab, Box } from '@mui/material';
// import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';
//
// const AuthPage = () => {
//     const [tab, setTab] = useState(0);
//
//     const handleChange = (_: React.SyntheticEvent, newValue: number) => {
//         setTab(newValue);
//     };
//
//     return (
//         <Container maxWidth="sm">
//             <Tabs value={tab} onChange={handleChange} centered>
//                 <Tab label="Login" />
//                 <Tab label="Signup" />
//             </Tabs>
//             <Box mt={3}>
//                 {tab === 0 ? <LoginForm /> : <SignupForm />}
//             </Box>
//         </Container>
//     );
// };
//
// export default AuthPage;
