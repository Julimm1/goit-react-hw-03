import s from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
      className={s.input}
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
