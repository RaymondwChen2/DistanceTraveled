import * as APIUtil from '../utils/routeslog';

export const RECEIVE_ALL_ROUTESLOGS = 'RECEIVE_ALL_ROUTESLOGS'
// receive argument dispatched from thunk action
const receiveRoutesLogs = routes => ({
  type: RECEIVE_ALL_ROUTESLOGS,
  routes
});

const removeRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

const receiveRouteLogsErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
})

// action dispatch from my component passing userId to the ajax request
export const fetchRoutesLogs = (userId) => dispatch => {
  debugger
  return APIUtil.getRouteLogs(userId)
  // ajax request returns a response and the response is dispatch to receiveRoutesLogs
  .then(routeslogs => {
    return dispatch(receiveRoutesLogs(routeslogs))
  })
}