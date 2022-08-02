import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(
      initialFormValues
    ); /* Form placeholder kısmını tekrardan boşalttık */
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          onChange={onChangeInput}
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
        />
      </div>
      <div>
        <input
          onChange={onChangeInput}
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
