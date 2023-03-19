import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';

export const PaginationBlock = ({ pageCount, page, onChange }) => {
  return (
    <Pagination
      count={pageCount}
      page={page}
      onChange={onChange}
      variant="outlined"
      color="primary"
      siblingCount={0}
      boundaryCount={1}
      sx={{ display: 'flex', justifyContent: 'center' }}
    />
  );
};
PaginationBlock.propTypes = {
  onChange: PropTypes.func,
  page: PropTypes.number,
  pageCount: PropTypes.number,
};
