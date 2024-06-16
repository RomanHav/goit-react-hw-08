import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { toast, Toaster } from "react-hot-toast";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  toast("Login success");
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
      <Toaster />
    </div>
  );
};

export default Contacts;
