export const fetchRouteLog = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/routeslog`
  })
}