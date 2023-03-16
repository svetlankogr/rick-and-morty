import { Pagination } from '@mui/material';

export const PaginationBlock = ({ pageCount, page, onChange }) => {
  return (
    <Pagination
      count={pageCount}
      page={page}
      onChange={onChange}
      variant="outlined"
      color="primary"
    />
  );
};
