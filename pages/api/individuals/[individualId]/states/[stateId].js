import {randomApiWait} from '../../../../../utils/random';

const STATES_BY_INDIVIDUAL_BY_ID = {
  123: {
    5: {
      licensed: 'Yes',
    },
  },
  456: {
    10: {
      licensed: 'No',
    },
  },
  789: {
    10: {
      licensed: 'No',
    },
  },
};

export default async function handler(req, res) {
  const {individualId, stateId} = req.query;

  const individual = STATES_BY_INDIVIDUAL_BY_ID[individualId][stateId] || {
    licensed: null,
  };

  await randomApiWait();
  // res.sendStatus(500);
  res.status(200).json(individual);
}
