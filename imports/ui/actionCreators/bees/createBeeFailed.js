// Actoon Types
import { CREATE_BEE_FAILED } from '../../actionTypes/bees';

// Action Creator
export const createBeeFailed = error => ({
  type: CREATE_BEE_FAILED,
  payload: error
});

export default createBeeFailed;
