import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

type ICustomPaginationProps = {
  currentPage: number;
  limit: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
  pageSizeOptions: number[];
};

const CustomPagination = ({
  currentPage,
  limit,
  total,
  onChange,
  pageSizeOptions,
}: ICustomPaginationProps) => {
  const handleChange: PaginationProps['onChange'] = (page, pageSize) => {
    onChange(page, pageSize);
  };

  return (
    <div className="w-full flex justify-end mt-10 border-t pt-4">
      <Pagination
        total={total}
        showTotal={(total) => `Total ${total} items`}
        current={currentPage}
        pageSize={limit}
        onChange={handleChange}
        showSizeChanger
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
};

export default CustomPagination;
