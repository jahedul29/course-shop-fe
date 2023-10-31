import { useGetCourseDetailsQuery } from '@/redux/features/course/courseApi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { GiDuration } from 'react-icons/gi';
import { GrStatusGood } from 'react-icons/gr';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCourseDetailsQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });

  console.log({ data });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-black text-6xl font-bold">{data?.name}</h1>
          <p className="text-gray-600 text-lg font-semibold mt-8">
            {data?.description}
          </p>
          <div className="flex mt-5 text-2xl gap-x-2 font-semibold text-gray-400">
            <p>Instructor: </p>
            <p>{data?.instructor}</p>
          </div>
        </div>
        <div className="col-span-1">
          <img className="ml-auto" src={data?.thumbnail} alt="" />
        </div>
      </div>
      <div className="mt-10 p-4 bg-gray-100 flex justify-around text-black font-semibold">
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <GiDuration /> Duration
          </p>
          <p className="flex gap-x-2 items-center"> {data?.duration}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <GrStatusGood />
            Course Status
          </p>
          <p> {data?.enrollmentStatus}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <HiOutlineLocationMarker />
            Location
          </p>
          <p>{data?.location}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl flex items-center gap-x-1">
            <AiOutlineSchedule />
            Schedule
          </p>
          <p>{data?.schedule}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12">
        <div className="col-span-2">
          <h1 className="text-3xl text-black font-semibold">Syllabus</h1>
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
        <div className="col-span-1">
          <button className="rounded-md mt-14 px-12 py-4 text-3xl font-semibold text-white flex items-center justify-center cursor-pointer ml-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
