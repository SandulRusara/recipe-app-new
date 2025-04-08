
import { Routes, Route, Navigate } from 'react-router-dom';

import SignupPage from './pages/SignupPage';

import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Dashboard from './pages/ Dashboard.tsx';
import LoginPage from "./pages/ LoginPage.tsx";

const App = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
};

export default App;
