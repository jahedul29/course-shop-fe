import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tag-types';
import { IMeta } from '@/types';

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (arg: Record<string, any>) => ({
        url: `/courses`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          courses: response,
          meta,
        };
      },
      providesTags: [tagTypes.courses],
    }),
    getCourseDetails: builder.query({
      query: (id: string | undefined) => ({
        url: `/courses/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseDetailsQuery } = courseApi;
