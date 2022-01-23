import http from "../../service/api.http";

export const UserService = {
    getAllUsers: (page = 1, limit = 10, sort = 'desc') => http.get(`/user?page=${page}&limit=${limit}&sort=${sort}`),
}

