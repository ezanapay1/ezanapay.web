import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";
import { IGenericResponse } from "./types";
import { userApi } from "./userApi";
import { RegisterInput } from "../../routes/Auth/Registration";
import { LoginInput } from "../../routes/Auth/Login";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/user`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "/",
          method: "POST",
          body: data,
        };
      },
    }),

    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginInput
    >({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),

    verifyEmail: builder.mutation<
      IGenericResponse,
      { verificationCode: string }
    >({
      query({ verificationCode }) {
        return {
          url: `/verify/${verificationCode}`,
          method: "GET",
        };
      },
    }),

    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "/logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useLogoutUserMutation,
} = authApi;
