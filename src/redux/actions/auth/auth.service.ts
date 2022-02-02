import http from "../../service/api.http";

export const AuthService = {
    authLogin: (postParams: any) => http.post(`/login`, postParams),
}