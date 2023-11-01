import { Button, Progress } from 'antd';
import { BiLocationPlus, BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type IEnrollmentCardProps = {
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  location: string;
  duration: string;
  enrollmentStatus: string;
  name: string;
  id: string;
  progress: number;
  status: string;
  handleMarkAsCompleted: (courseId: string) => void;
};

const EnrollmentCard = ({ ...enrollment }: IEnrollmentCardProps) => {
  return (
    <Link
      to={`/course/${enrollment.id}`}
      className="relative bg-white rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-1000 scale-100 hover:scale-105"
    >
      <div className="rounded-full px-2 py-1 absolute top-4 bg-primary text-white text-sm font-semibold right-4 uppercase">
        {enrollment.enrollmentStatus}
      </div>

      <img
        className="rounded w-full h-[100px] mb-1 object-cover"
        src={enrollment.thumbnail}
        alt=""
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          enrollment.handleMarkAsCompleted(enrollment.id);
        }}
        className={`w-full py-5 mt-4 flex items-center justify-center text-xl  font-bold ${
          enrollment.status === 'completed'
            ? 'bg-gray-300 !text-black cursor-disabled pointer-events-none'
            : 'bg-primary !text-white '
        }`}
      >
        {enrollment.status === 'completed' ? 'Completed' : 'Mark as Complete'}
      </Button>
      <div className="px-3 py-2">
        <p className="text-gray-500 font-semibold">{enrollment.instructor}</p>
        <h3 className="text-black text-xl font-bold mt-2 line-clamp-2">
          {enrollment.name}
        </h3>
        <div className="flex justify-between items-center mt-3 mb-5">
          <p className="flex gap-x-1 items-center text-gray-700 font-semibold">
            <BiTime />
            {enrollment.duration}
          </p>
          <p className="flex gap-x-1 items-center text-gray-700 font-semibold">
            <BiLocationPlus />
            {enrollment.location}
          </p>
        </div>

        <Progress
          className="absolute -bottom-2 left-0 text-white"
          size={['100%', 20]}
          strokeLinecap="butt"
          percent={enrollment.progress}
          strokeColor="#1E577F"
        />
      </div>
    </Link>
  );
};

export default EnrollmentCard;
