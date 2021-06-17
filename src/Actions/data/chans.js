export const ADD_CHAN = "ADD_CHAN";
export const DELETE_CHAN = "DELETE_CHAN";
export const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";

export function addChans(chans) {
  return {
    type: ADD_CHAN,
    data: chans,
  };
}

export function deleteChan(id) {
  return {
    type: DELETE_CHAN,
    data: id,
  };
}
