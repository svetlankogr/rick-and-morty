import PropTypes from 'prop-types';
import css from './SearchForm.module.css';
export const SearchForm = ({ onFormSubmit, onChange, searchQuery }) => {
  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <button className={css.btnSearch} type="submit">
        <span></span>
      </button>
      <input
        className={css.input}
        name="name"
        placeholder="Filter by name..."
        type="text"
        value={searchQuery}
        onChange={onChange}
      />
    </form>
  );
};
SearchForm.propTypes = {
  onFormSubmit: PropTypes.func,
  onChange: PropTypes.func,
  pagsearchQueryeCount: PropTypes.string,
};
