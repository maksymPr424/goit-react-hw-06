import { useState } from "react";
import { useEffect } from "react";
import css from "./App.module.css";
import contactJSON from "../contact.json";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contact, setContact] = useState(() => {
    const localContact = JSON.parse(window.localStorage.getItem("contact"));
    if (localContact !== null) {
      return localContact;
    }
    return contactJSON;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);

  const delContact = (key) => {
    setContact((prevList) => {
      return prevList.filter(({ id }) => id !== key);
    });
  };

  const searchFunc = (fullName) => {
    setSearch(fullName);
    fullName === ""
      ? setContact(contact)
      : setContact((prevList) => {
          return prevList.filter(({ name }) => {
            const nameContact = name.toLowerCase();
            const searchContactName = fullName.toLowerCase();
            return nameContact.includes(searchContactName);
          });
        });
  };

  const addContact = (newContact) => {
    setContact((prevContact) => [...prevContact, newContact]);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm values={contact} onAdd={addContact} />
      <SearchBox value={search} onSearch={searchFunc} />
      <ContactList contacts={contact} onDel={delContact} />
    </div>
  );
}

export default App;
