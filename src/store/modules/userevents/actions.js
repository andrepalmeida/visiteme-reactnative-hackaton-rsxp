export function addEvent(data) {
  return {
    type: '@event/ADD_REQUEST',
    payload: data,
  };
}
