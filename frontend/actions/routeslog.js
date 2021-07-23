import * as APIUtil from '../utils/routeslog';

export const RECEIVE_ALL_ROUTESLOGS = 'RECEIVE_ALL_ROUTESLOGS'
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE'
export const REMOVE_ROUTE = 'REMOVE_ROUTE'
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS'

// receive argument dispatched from thunk action
const receiveRoutesLogs = routes => ({
  type: RECEIVE_ALL_ROUTESLOGS,
  routes
});

const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
});

const removeRoute = routeId => ({
  type: REMOVE_ROUTE,
  routeId
});

const receiveRouteLogsErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
})

// action dispatch from my component passing userId to the ajax request
export const fetchRoutesLogs = (userId) => dispatch => {
  return APIUtil.fetchRouteLogs(userId)
  // ajax request returns a response and the response is dispatch to receiveRoutesLogs
  .then(routeslogs => {
    return dispatch(receiveRoutesLogs(routeslogs))
  })
};

export const fetchRoutelog = (routeId) => dispatch => {
  return APIUtil.fetchRoutelog(routeId)
  .then(routeslog => {
    return dispatch(receiveRoute(routeslog))
  })
};

export const createRouteLog = route => dispatch => {
  return APIUtil.createRouteLog(route)
  .then(route => dispatch(receiveRoute(route)))
};

export const updateRouteLog = route => dispatch => {
  return APIUtil.updateRouteLog(route)
  .then(route => {
    return dispatch(receiveRoute(route))
  })
};

export const deleteRouteLog = routeId => dispatch => {
  return APIUtil.deleteRouteLog(routeId)
  .then(()=> {
    return dispatch(removeRoute(routeId))
  })
}