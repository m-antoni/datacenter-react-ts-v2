import http from "../../service/api.http";

export const UserService = {
    getAllUsers: (page = 1, limit = 10, sort = 'desc') => http.get(`/user?page=${page}&limit=${limit}&sort=${sort}`),
    getUserByLinkedInUrl: (linkedin_url: string) => http.get(`/user?linkedin_url=${linkedin_url}`),
    archiveOrRestoreUser: (formParams: any) => http.post(`/user/archive-or-restore`, formParams),
    getAllArchiveUsers: (page = 1, limit = 10, sort = 'desc') => http.get(`/user/archive?page=${page}&limit=${limit}&sort=${sort}`),
    getSingleSetting: (setting_name: string) => http.get(`/settings?setting_name=${setting_name}`),
}
