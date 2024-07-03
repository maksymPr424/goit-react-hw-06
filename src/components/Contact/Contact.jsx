import css from "./Contact.module.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";

export default function Contact({ name, number, onDel, id }) {
  const del = () => {
    onDel(id);
  };

  return (
    <>
      <div>
        <h2 className={css.text}>
          <BsPeopleFill className={css.icon} /> {name}
        </h2>
        <p className={css.text}>
          <PiPhoneCallFill className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={del} className={css.delBtn}>
        Delete
      </button>
    </>
  );
}
