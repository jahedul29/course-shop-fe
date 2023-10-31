import { BiLocationPlus, BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type ICourseCardProps = {
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  location: string;
  duration: string;
  enrollmentStatus: string;
  name: string;
  id: string;
};

const CourseCard = ({ ...course }: ICourseCardProps) => {
  return (
    <Link
      to={`/course/${course.id}`}
      className="relative bg-white rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-1000 scale-100 hover:scale-105"
    >
      <div className="rounded-full px-2 py-1 absolute top-4 bg-primary text-white text-sm font-semibold right-4 uppercase">
        {course.enrollmentStatus}
      </div>
      <img
        className="rounded w-full h-[200px] mb-1"
        src={course.thumbnail}
        alt=""
      />
      <div className="px-3 py-2">
        <p className="text-gray-500 font-semibold">{course.instructor}</p>
        <h3 className="text-black text-2xl font-bold mt-2 line-clamp-2">
          {course.name}
        </h3>
        <p className="line-clamp-3 mt-2">{course.description}</p>
        <p className="flex gap-x-1 items-center mt-6 text-gray-700 font-semibold">
          <BiTime />
          {course.duration}
        </p>
        <p className="flex gap-x-1 items-center text-gray-700 font-semibold">
          <BiLocationPlus />
          {course.location}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
