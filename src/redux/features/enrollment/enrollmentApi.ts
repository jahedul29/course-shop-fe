import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tag-types';

const enrollmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    enrollStudentIntoCourse: builder.mutation({
      query: ({ courseId, userId }) => ({
        url: `/enrollments/enroll-into-course/${courseId}/${userId}`,
        method: 'POST',
      }),
      invalidatesTags: [tagTypes.enrollments],
    }),
    getAllEnrollments: builder.query({
      query: () => ({
        url: '/enrollments',
        method: 'GET',
      }),
      providesTags: [tagTypes.enrollments],
    }),
    markCourseAsComplete: builder.mutation({
      query: ({ courseId, userId }) => ({
        url: `/enrollments/mark-course-as-complete/${courseId}/${userId}`,
        method: 'POST',
      }),
      invalidatesTags: [tagTypes.enrollments],
    }),
  }),
});

export const {
  useEnrollStudentIntoCourseMutation,
  useGetAllEnrollmentsQuery,
  useMarkCourseAsCompleteMutation,
} = enrollmentApi;
