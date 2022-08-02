import { useState, useEffect } from 'react';
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname : "Canan",
            phone_number : 123123
        },
        {
            fullname : "Furkan",
            phone_number : 456457
        },
        {
            fullname : "Efe",
            phone_number : 987659
        },
        {
            fullname : "Zehra",
            phone_number : 785690
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;
