import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDel }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.listItem}>
            <Contact name={name} number={number} onDel={onDel} id={id} />
          </li>
        );
      })}
    </ul>
  );
}
