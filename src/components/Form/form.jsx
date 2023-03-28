
import { useDispatch} from 'react-redux';
import {FormSt,Label} from "components/Form/form.styled"
import { addContact } from '../../redux/slice';
  let contactName = '';
  let contactNumber = '';
export const Form = () => {
  const dispatch = useDispatch();

  

  
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        contactName = value
        console.log(value)
        break;
      case 'number':
        contactNumber = value
        console.log(value)
        break;
      default:
        return;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactName, contactNumber)
    dispatch(addContact(contactName, contactNumber))
    e.currentTarget.reset()

  }
    return (
        <FormSt onSubmit={handleSubmit}>
                <Label >Name
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={contactName}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </Label>
                <Label >Number
                    <input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        value={contactNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required/>
          </Label>
          <button type="submit">Add contacts</button>
        </FormSt>
      
      
  )
}