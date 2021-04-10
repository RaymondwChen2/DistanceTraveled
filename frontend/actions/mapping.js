import * as APIUtil from '../utils/mapping';


export const RECEIVE_ALL_MAPPING = 'RECEIVE_ALL_MAPPING'
export const RECEIVE_MAPPING = 'RECEIVE_MAPPING'

const receiveMappings = mappings => ({
  type: RECEIVE_ALL_MAPPING,
  mappings
})

const createMapping = mapping => ({
  type: RECEIVE_MAPPING,
  mapping
})

export const fetchRoute = () => dispatch => {
  return APIUtil.fetchRoute()
  .then(mappings => dispatch(receiveMappings(mappings)))
}

export const createRoute = (route) => dispatch => {
  return APIUtil.createRoute(route)
  .then(route =>  dispatch(createMapping(route)))
}