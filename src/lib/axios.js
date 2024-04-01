import Axios from "axios";

function authRequestInterceptor(config) {
  config.headers.Accept = "application/json";
  return config;
}

const axios = Axios.create({
  baseURL: "",
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error?.response?.status === 401) {
      try {
        // deleteAuthCookies();
        window?.location?.replace("/login");
      } catch (err) {
        console.error("Logout failed! : ", err);
      }
    } else {
      console.log("Error:", error)
      // notifyApiError(error);
    }
    return Promise.reject(error);
  }
);

export default axios;
