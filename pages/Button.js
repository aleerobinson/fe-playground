import {useContextSetter} from '../hooks/useContext';

export default function Button() {
  const setIsOpen = useContextSetter();
  const open = () => setIsOpen(true);

  return <button onClick={open}>Click!</button>;
}
