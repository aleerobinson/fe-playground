import {useRouter} from 'next/router';
import {useState} from '../../hooks/useState';
import {useIndividual} from '../../hooks/useIndividual';
import {useMultipleExample} from '../../hooks/useMultipleExample';

export default function Root() {
  const router = useRouter();
  const {id} = router.query;

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

  return (
    <p>{`Loaded Individual [${individualQuery.data.id}] In State [${
      stateQuery.data.name
    }] Is Licensed [${multiQuery.data.licensed || 'Unknown'}]`}</p>
  );
}
