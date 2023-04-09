import React, { ReactNode, useEffect } from 'react';
import SideBar from './SideBar';
import { RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';

type UserLayoutProps = {
	children: ReactNode;
};

const UserLayout = ({ children }: UserLayoutProps) => {
    const isAuthenticated = useIsAuthenticated();



    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isAuthenticated()) {
    //         navigate('/login');
    //     }
    // }, [isAuthenticated, navigate])

	return (
        <RequireAuth loginPath='/login'>
		<div className="flex">
			<SideBar />
			<div className="flex-1 p-10">{children}</div>
		</div>
        </RequireAuth>
	);
};

export default UserLayout;
