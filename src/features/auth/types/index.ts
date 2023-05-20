export type AuthUser = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'admin' | 'landlord' | 'tenant' | 'property_manager';
}

