import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: { ...order },
                // Credentials added while troubleshooting
                credentials: 'include',
            }),
        }),
    }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
