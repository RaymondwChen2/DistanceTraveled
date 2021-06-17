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

export const createRouteLog = route => {
  return $.ajax({
    url: 'api/routeslogs',
    method: 'POST',
    data: { route }
  })
}

export const updateRouteLog = route => {
  return $.ajax({
    url: `api/routeslogs/${route.id}`,
    method: 'PATCH',
    data: { route }
  })
}

export const deelteRouteLog = routeId => {
  return $.ajax({
    url: `api/routeslogs/${routeId}`,
    method: 'DELETE'
  })
}