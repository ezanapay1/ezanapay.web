import React, { ReactNode } from 'react';
import { SideBar } from '../components';

type UserLayoutProps = {
    children: ReactNode 
}

const UserLayout = ({children}: UserLayoutProps) => {
	return (
		<div className='flex'>
			<SideBar />
			<div className='flex-1 p-10'>
				{children}    
			</div>    
		</div>
	);
};

export default UserLayout;