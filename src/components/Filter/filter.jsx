
import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter } from "components/Filter/Filret.style"
import { filterContacts } from 'redux/slice';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  function handleChange(e) {
    const text = e.target.value;
    dispatch(filterContacts(text))

  }
  return (
    <LabelFilter>
      Find contacts by name
      <input type="text" value={value} onChange={handleChange} />
    </LabelFilter>
  );
};
