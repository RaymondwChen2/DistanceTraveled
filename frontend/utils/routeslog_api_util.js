export const fetchRouteLogs = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/routeslog`
  })
}

export const fetchRoutelog = routeId => {
  return $.ajax({
    method: 'GET',
    url: `/api/routeslog/${routeId}`
  })
}

export const createRouteLog = routeslog => {
  return $.ajax({
    url: 'api/routeslog',
    method: 'POST',
    data: { routeslog }
  })
}

export const updateRouteLog = routeslog => {
  return $.ajax({
    url: `api/routeslog/${routeslog.id}`,
    method: 'PATCH',
    data: { routeslog }
  })
}

export const deleteRouteLog = routeId => {
  return $.ajax({
    url: `api/routeslog/${routeId}`,
    method: 'DELETE'
  })
}