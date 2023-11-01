import CustomPagination from '@/components/common/CustomPagination';
import Loading from '@/components/common/Loading/Loading';
import CourseCard from '@/components/course/CourseCard/CourseCard';
import { useDebounced } from '@/hooks/common';
import { useGetCoursesQuery } from '@/redux/features/course/courseApi';
import { useState } from 'react';

const Home = () => {
  const [limit, setLimit] = useState<number>(8);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const query: Record<string, any> = {
    limit,
    page,
    sortBy,
    sortOrder,
  };

  const debounceTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debounceTerm) {
    query['searchTerm'] = debounceTerm;
  }

  const { data, isLoading } = useGetCoursesQuery(
    { ...query },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="container mx-auto">
      {isLoading && <Loading />}
      <div className="flex justify-between border-b-2 items-center pb-3">
        <p className="text-black text-2xl font-semibold">Available Courses</p>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full border-2 max-w-xs bg-transparent text-black"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        {!data?.courses?.length ? (
          <div className="flex items-center justify-center w-full pt-10">
            <p className="text-center text-xl text-black">
              No courses available
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
            {data?.courses?.map((item: any) => <CourseCard {...item} />)}
          </div>
        )}
      </div>
      <CustomPagination
        currentPage={page}
        limit={limit}
        total={data?.meta.total as number}
        onChange={(page, pageSize) => {
          setLimit(pageSize);
          setPage(page);
        }}
        pageSizeOptions={[4, 8, 16, 32]}
      />
    </div>
  );
};

export default Home;
