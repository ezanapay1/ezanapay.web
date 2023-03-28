import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/api/user/login',
				method: 'POST',
				body: {
					...credentials,
				},
			}),
		}),
	})
});

export const { useLoginMutation } = authApiSlice;
<<<<<<< HEAD
export const { useRegisterMutation } = authApiSlice;
=======
>>>>>>> 63d34bf7e2df6a8480d40bc4fb5685f8dfb6647c
