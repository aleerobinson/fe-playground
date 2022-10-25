import {SQFormDialog, SQFormTextField} from '@selectquotelabs/sqform';
import {useContextSetter} from '../../hooks/useContext';
import DialogFields from './DialogFields';

export default function Dialog({stateName, licensed}) {
  const setIsOpen = useContextSetter();
  const close = () => setIsOpen(false);
  const save = (values) => {
    console.log(values);
    setIsOpen(false);
  };

  const initialValues = {
    stateName,
    licensed,
    other: 'Another Field',
  };

  return (
    <SQFormDialog
      title="Title"
      initialValues={initialValues}
      isOpen={true}
      maxWidth="md"
      onClose={close}
      onSave={save}
      shouldRequireFieldUpdates={true}
    >
      <DialogFields />
    </SQFormDialog>
  );
}
