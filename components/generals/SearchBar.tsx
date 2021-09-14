export const SearchBar = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="filter-character"
        id="filter"
        placeholder="Filter"
        onInput={handleSearch}
      />{" "}
    </div>
  );
};
