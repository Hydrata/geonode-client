import * as types from '../actiontypes';
import {saveToGeonode} from '../../services/geonode';


export function getId() {
  return {
    type: types.GET_MAP_ID
  };
}
export function isEditing() {
  return {
    type: types.GET_IS_EDITING
  };
}
export function setMapId(id) {
  return {
    type: types.SET_MAP_ID,
    mapId: id
  };
}
export function saveMapError(error) {
  return {
    type: types.SAVE_MAP_ERROR,
    error
  };
}
export function saveMapSuccess(result) {
  return {
    type: types.SAVE_MAP_SUCCESS,
    result
  };
}
export function setUserLoggedIn(loggedIn) {
  return {
    type: types.SET_USER_LOGGED_IN,
    loggedIn: loggedIn
  };
}
export function saveMap() {
  return (dispatch, getState) => {
    let state = getState();
    return saveToGeonode(state.server.url, state.mapConfig, state.map.id)
    .then((json) => dispatch(saveMapSuccess(json)))
    .catch(ex => dispatch(saveMapError(ex)));
  };
}
