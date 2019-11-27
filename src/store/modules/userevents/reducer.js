import { produce } from 'immer';

const INITIAL_STATE = {
  events: [],
};

export default function userevents(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@event/ADD_REQUEST': {
        draft.events.push(action.payload);
        break;
      }
      default:
    }
  });
}
