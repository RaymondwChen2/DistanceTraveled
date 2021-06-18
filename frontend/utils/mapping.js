

export const createRoute = route => {
  return $.ajax({
    method: 'POST',
    url: '/api/routeslogs',
    data: { route }
  })
};
  
export const fetchRoutes = (data) =>{
  return $.ajax({
    url: `/api/${data}/mappings`,
    method: 'GET',
    data
  })
};

