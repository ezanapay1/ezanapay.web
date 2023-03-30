import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../redux/features/auth/authSlice';

import React from 'react';

const RequireAuth = () => {
	const token = useSelector(selectCurrentToken);
	// const location = useLocation();

	return token ? <></> : null;
};

export default RequireAuth;
