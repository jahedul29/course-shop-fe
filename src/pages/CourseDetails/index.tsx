import Loading from '@/components/common/Loading';
import { useGetCourseDetailsQuery } from '@/redux/features/course/courseApi';
import { useEnrollStudentIntoCourseMutation } from '@/redux/features/enrollment/enrollmentApi';
import { getUserInfo } from '@/service/auth.service';
import { Button, message } from 'antd';
import { AiOutlineSchedule } from 'react-icons/ai';
import { GiDuration } from 'react-icons/gi';
import { HiOutlineLocationMarker, HiStatusOnline } from 'react-icons/hi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCourseDetailsQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });
  const navigate = useNavigate();
  const [enrollIntoCourse, enrollIntoCourseOptions] =
    useEnrollStudentIntoCourseMutation();

  const handleEnroll = async () => {
    message.destroy();
    const user = getUserInfo();
    if (!user) {
      navigate('/login');
    }
    const res: any = await enrollIntoCourse({
      courseId: id,
      userId: (getUserInfo() as any).userId,
    });

    if (res?.error) {
      message.error(res.error.data);
      return;
    }

    message.success('Student successfully enrolled');
    navigate('/dashboard');
  };

  return (
    <div className="container px-3 lg:px-0 lg:mx-auto">
      {(isLoading || enrollIntoCourseOptions.isLoading) && <Loading />}
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <h1 className="text-black text-6xl font-bold">{data?.name}</h1>
          <p className="text-gray-600 text-lg font-semibold mt-8">
            {data?.description}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start items-center mt-5 text-2xl gap-x-2 font-semibold text-gray-400">
            <p className="flex items-center gap-x-1">
              <LiaChalkboardTeacherSolid className="text-primary font-bold" />{' '}
              Instructor:{' '}
            </p>
            <p>{data?.instructor}</p>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 mt-10 lg:mt-0">
          <img className="mx-auto lg:ml-auto" src={data?.thumbnail} alt="" />
        </div>
      </div>
      <div className="mt-10 p-4 bg-gray-100 flex flex-col sm:gap-y-0 gap-y-3 sm:flex-row justify-around text-black font-semibold">
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <GiDuration className="text-primary font-bold" /> Duration
          </p>
          <p className="flex gap-x-2 items-center"> {data?.duration}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <HiStatusOnline className="text-primary font-bold" />
            Course Status
          </p>
          <p> {data?.enrollmentStatus}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <HiOutlineLocationMarker className="text-primary font-bold" />
            Location
          </p>
          <p>{data?.location}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <AiOutlineSchedule className="text-primary font-bold" />
            Schedule
          </p>
          <p>{data?.schedule}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <div className="col-span-3 lg:col-span-2 order-2 lg:order-1 mt-10 lg:mt-0">
          <h1 className="text-3xl text-black font-semibold">Prerequisites</h1>
          <ul className="mx-auto ml-10 mt-5 list-disc">
            {data?.prerequisites?.map((prereq: string) => (
              <li className="text-gray-600 text-xl font-medium mb-2">
                {prereq}
              </li>
            ))}
          </ul>

          <h1 className="text-3xl text-black font-semibold mt-10">Syllabus</h1>
          <div className="join join-vertical w-full mt-5 bg-gray-100 text-gray-700">
            {data?.syllabus?.map((item: any) => (
              <div className="collapse collapse-arrow join-item">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Week {item?.week}
                </div>
                <div className="collapse-content">
                  <p>topic: {item?.topic}</p>
                  <p>content: {item?.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 order-1 lg:order-2">
          <Button
            onClick={handleEnroll}
            className="rounded-md mt-10 lg:mt-14 px-14 py-8 text-3xl font-semibold !text-white flex items-center justify-center cursor-pointer m-auto lg:ml-auto transition-all duration-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500"
            loading={enrollIntoCourseOptions?.isLoading}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
