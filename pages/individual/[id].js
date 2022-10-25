import {useRouter} from 'next/router';
import {useState} from '../../hooks/useState';
import {useIndividual} from '../../hooks/useIndividual';
import {useMultipleExample} from '../../hooks/useMultipleExample';
import {useContextValue} from '../../hooks/useContext';
import Dialog from '../dialog/Dialog';
import Button from '../Button';

export default function Root() {
  const router = useRouter();
  const {id} = router.query;

  const isOpen = useContextValue();

  const individualQuery = useIndividual(id);
  const stateQuery = useState(individualQuery.data?.stateId);
  const multiQuery = useMultipleExample(
    individualQuery.data?.id,
    stateQuery.data?.id
  );

  if (
    stateQuery.isLoading ||
    individualQuery.isLoading ||
    multiQuery.isLoading
  ) {
    return 'Loading...';
  }

  if (stateQuery.error || individualQuery.error || multiQuery.error) {
    return '*** Error State ***';
  }

  if (!stateQuery.data || !individualQuery.data || !multiQuery.data) {
    return 'Initial';
  }

  const text = `Loaded Individual [${individualQuery.data.id}] In State [${
    stateQuery.data.name
  }] Is Licensed [${multiQuery.data.licensed || 'Unknown'}]`;

  return (
    <>
      <p>{text}</p>
      <Button />
      {isOpen && (
        <Dialog
          stateName={stateQuery.data.name}
          licensed={multiQuery.data.licensed}
        />
      )}
    </>
  );
}
