export const fetchRouteComments = routeId => (
    $.ajax({
        url: `api/routeslog/${routeId}/comments`,
        method: 'GET'
    })
);

export const createComment = comment => (
    $.ajax({
        url: `api/comments`,
        method: 'POST',
        data: { comment }
    })
);


export const deleteComment = commentId => (
    $.ajax({
        url: `api/comments/${commentId}`,
        method: 'DELETE'
    })
);