export const fetchUser = userId => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET'
    });
};

export const fetchUserSearch = search => {
    return $.ajax({
        url: `api/users/search`,
        method: 'POST',
        data: search
    });
};