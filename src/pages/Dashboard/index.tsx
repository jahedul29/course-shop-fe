import Loading from '@/components/common/Loading/Loading';
import EnrollmentCard from '@/components/enrollment/EnrollmentCard';
import {
  useGetAllEnrollmentsQuery,
  useMarkCourseAsCompleteMutation,
} from '@/redux/features/enrollment/enrollmentApi';
import { getUserInfo } from '@/service/auth.service';
import { message } from 'antd';

const Dashboard = () => {
  const { data, isLoading } = useGetAllEnrollmentsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [markCourseAsCompleted, markCourseAsCompletedOptions] =
    useMarkCourseAsCompleteMutation();
  const user: any = getUserInfo();

  const handleMarkAsCompleted = async (courseId: string) => {
    try {
      const res = await markCourseAsCompleted({
        courseId: courseId,
        userId: user?.userId,
      }).unwrap();
      if (res?.error) {
        message.error(res?.error?.data);
        return;
      }
      message.success('Course marked as completed');
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div className="container px-3 lg:px-0 lg:mx-auto">
      {(isLoading || markCourseAsCompletedOptions.isLoading) && <Loading />}
      <h1 className="text-3xl text-black mb-8 font-bold">Dashboard</h1>
      <div>
        <h1 className="text-2xl text-black mb-5 font-semibold">
          Enrolled Courses
        </h1>
        <div>
          {!isLoading && data && data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
              {data.map((item: any) => (
                <EnrollmentCard
                  {...{
                    ...item.course,
                    status: item.status,
                    progress: item.progress,
                    handleMarkAsCompleted,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full pt-10">
              <p className="text-center text-xl text-black">
                No Enrollments available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
