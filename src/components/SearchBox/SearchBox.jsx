import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
  const searchId = useId();

  const search = (e) => {
    const fullName = e.target.value.trim();
    onSearch(fullName);
  };

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={search}
        value={value}
        className={css.input}
        type="text"
        id={searchId}
        name="searchBox"
      />
    </div>
  );
}
