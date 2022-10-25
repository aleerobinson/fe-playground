import {useName} from '../hooks/useState';
import {useIndividual} from '../hooks/useIndividual';

export default function Root() {
  const nameQuery = useName();
  const individualQuery = useIndividual();

  if (nameQuery.isLoading || individualQuery.isLoading) {
    return 'Loading...';
  }

  if (nameQuery.error || individualQuery.error) {
    return '*** Error State ***';
  }

  if (!nameQuery.data || !individualQuery.data) {
    return 'Initial';
  }

  return <p>{`Loaded Individual [${individualQuery.id}]`}</p>;
}
