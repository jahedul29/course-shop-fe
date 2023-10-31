import { api } from '@/redux/api/baseApi';

const counterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCounter: builder.query({
      query: () => '',
    }),
  }),
});

export const { useGetCounterQuery } = counterApi;
