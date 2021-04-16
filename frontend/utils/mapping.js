

export const createRoute = route => {
  return $.ajax({
    method: 'POST',
    url: '/api/mappings',
    data: { route }
  })
};
  
export const fetchRoutes = (data) =>{
  return $.ajax({
    url: '/api/mappings',
    method: 'GET',
    data
  })
};
