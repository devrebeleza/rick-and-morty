import { DivSearch, InputSearch, LabelSearch } from "../../styles/styles";

export const SearchBar = ({ handleSearch }) => {
  return (
    <DivSearch>
      <InputSearch
        type="text"
        name="filter-character"
        id="filter"
        placeholder="Filter"
        onInput={handleSearch}
        autocomplete="off"
      />
      <LabelSearch htmlFor="filter-character"></LabelSearch>
    </DivSearch>
  );
};
