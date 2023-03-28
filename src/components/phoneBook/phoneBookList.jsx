
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from "redux/selectors"
import { ContactsItem } from 'components/phoneBookItem/phoneBookItem' 
export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = useSelector(getFilter);
    const workFilter = () => {
        if (contacts.contacts.length === 0) {
            return;
        } else {
            const normalizedFilter = filterValue.toLowerCase();
            const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
        return filteredContacts;}
    };
    return (
        <section>
            {contacts.contacts.length !== 0 && <ul>
                {workFilter().map(contact => (
                    <li key={contact.id}>
                    <ContactsItem
                        item={contact}
                    /></li>))}
            </ul>}
            
        </section>
    )
}
