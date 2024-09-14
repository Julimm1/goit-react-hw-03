import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import s from "./ContactList.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.contact}>
      <div className={s.contactInfo}>
        <span className={s.icon} size="20">
          <FaUser />
        </span>
        {contact.name}:
        <span className={s.icon} size="20">
          <BsFillTelephoneFill />
        </span>
        {contact.number}
      </div>
      <button onClick={() => onDeleteContact(contact.id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
