// Actoon Types
import { BEES_REQUEST_FAILED } from '../../actionTypes/bees';

// Action Creator
const beesRequestFailed = error => {
  return { type: BEES_REQUEST_FAILED, payload: error };
};

export default beesRequestFailed;
