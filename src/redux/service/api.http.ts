import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1/datacenter';

const http = axios.create ({
  baseURL: API_ROOT,
  timeout: 60000,
  headers: {'Content-Type': 'application/json'},
});

// http.interceptors.request.use (
//   function (config) {
//     const token = getToken();
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     return Promise.reject (error);
//   }
// );

// http.interceptors.response.use((response) => {
//     return response;
// }, function (error) {
    
//     // validateToken()
//     // console.log('validating...');
//     // console.log(error.response);
//     if(error.response)
//     {
//       if (error.response.status === 401) {

//           let appState = {
//             isLoggedIn: false,
//             user: {}
//           };

//           localStorage["appState"] = JSON.stringify(appState);
//       }
//       return Promise.reject(error.response);
//     }
    
// });

export default http;