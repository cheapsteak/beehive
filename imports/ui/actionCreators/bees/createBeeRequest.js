// Actoon Types
import { CREATE_BEE_REQUEST } from '../../actionTypes/bees';

// Action Creator
export const createBeeRequest = beePrototype => ({
  type: CREATE_BEE_REQUEST,
  payload: beePrototype
});

export default createBeeRequest;
