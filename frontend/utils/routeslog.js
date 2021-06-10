export const getRouteLogs = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/routeslog`
  })
}