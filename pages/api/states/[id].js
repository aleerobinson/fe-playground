import {randomApiWait} from '../../../utils/random';

const STATES_BY_ID = {
  5: {
    id: 5,
    name: 'IOWA',
  },
  10: {
    id: 10,
    name: 'MISSOURI',
  },
};

export default async function handler(req, res) {
  await randomApiWait();
  // res.sendStatus(500);
  const state = STATES_BY_ID[req.query.id] || null;
  res.status(200).json(state);
}
