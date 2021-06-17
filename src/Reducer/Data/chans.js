import { ADD_CHAN, DELETE_CHAN } from "../../Actions/Data/chans";

const INITIAL_STATE = {};

export default function reduce(chanState = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CHAN:
      let chanData = {};
      action.data.forEach((chan) => {
        chanData[chan.identifier] = chan;
      });
      return { ...chanState, ...chanData };

    case DELETE_CHAN:
      let newState = { ...chanState };
      delete newState[action.data];
      return newState;
    default:
      return chanState;
  }
}
