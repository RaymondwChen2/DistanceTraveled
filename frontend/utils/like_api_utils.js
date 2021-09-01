export const fetchRouteLikes = routeId => (
    $.ajax({
        url: `api/routeslog/${routeId}/likes`,
        method: 'GET'
    })
);

export const createLike = like => (
    $.ajax({
        url: `api/likes`,
        method: 'POST',
        data: { like }
    })
);

export const unlikeRoute = likeId => (
    $.ajax({
        url: `api/likes/${likeId}`,
        method: 'DELETE'
    })
);