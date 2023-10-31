import config from '@/config';
import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import { tagTypeList } from '../tag-types';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: config.api_url }),
  tagTypes: [...tagTypeList],
  endpoints: () => ({}),
});
