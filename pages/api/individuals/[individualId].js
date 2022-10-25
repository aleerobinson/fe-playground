import {randomApiWait} from '../../../utils/random';

const INDIVIDUALS_BY_ID = {
  123: {
    id: 123,
    stateId: 5,
  },
  456: {
    id: 456,
    stateId: 10,
  },
  789: {
    id: 789,
    stateId: 5,
  },
};

export default async function handler(req, res) {
  await randomApiWait();
  // res.sendStatus(500);
  const individual = INDIVIDUALS_BY_ID[req.query.individualId] || null;
  res.status(200).json(individual);
}
