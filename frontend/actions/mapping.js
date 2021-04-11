import * as APIUtil from '../utils/mapping';


export const RECEIVE_ALL_MAPPINGS = 'RECEIVE_ALL_MAPPINGS'
export const RECEIVE_MAPPING = 'RECEIVE_MAPPING'

const fetchMappings = mappings => ({
  type: RECEIVE_ALL_MAPPINGS,
  mappings
});

const receiveMapping = route => ({
  type: RECEIVE_MAPPING,
  route
});


export const fetchRoutes = () => dispatch => {
  return APIUtil.fetchRoutes()
  .then(mappings => {
    return dispatch(fetchMappings(mappings))})};

export const createRoute = (route) => dispatch => {
  return APIUtil.createRoute(route)
  .then(route => dispatch(receiveMapping(route)))};

