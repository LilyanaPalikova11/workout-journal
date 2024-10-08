import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AppContext } from '../state/app.context';
import { Navigate, useLocation } from 'react-router-dom';

export default function Authenticated({ children, requiredRole }) {
    const { user, userData, loading } = useContext(AppContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate replace to="/" state={{ from: location }} />;
    }

    if (requiredRole && userData.role !== requiredRole) {
        return <Navigate replace to="/" state={{ from: location }} />;
    }

    return <>{children}</>;
}

Authenticated.propTypes = {
    children: PropTypes.any,
    requiredRole: PropTypes.string,
};
