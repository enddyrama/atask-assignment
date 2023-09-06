import callAPI from "..";
const ROOT = process.env.REACT_APP_ROOT;


export const getSearchDashboard = async (search: string, abort: AbortSignal) => {
    const url = `${ROOT}/search/users?q=${search}&per_page=5`;
    return callAPI({
        url,
        method: 'GET',
        signal: abort
    });
};

export const getRepo = async (user: string, page: number, per_page: number, abort: AbortSignal) => {
    const url = `${ROOT}/users/${user}/repos?page=${page}&per_page=${per_page}`;
    return callAPI({
        url,
        method: 'GET',
        signal: abort
    });
};