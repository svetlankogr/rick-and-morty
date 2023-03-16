export const SearchForm = ({ onFormSubmit, onChange, searchQuery }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        name="name"
        placeholder="Filter by name..."
        type="text"
        value={searchQuery}
        onChange={onChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};
