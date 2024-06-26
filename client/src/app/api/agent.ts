import axios, { AxiosError, AxiosResponse } from "axios";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { router } from "../../router/Route";
import { store } from "../store/store";

axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use((config) => {
  const token = store.getState().account.user?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    // console.log(response);
    const pagination = response.headers["pagination"]; // axios works with lowercase headers (does not use uppercase)
    if (pagination) {
      // response.data = new PaginatedResponse(
      //   response.data,
      //   JSON.parse(pagination)
      // );
      return response;
    }
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title || "Unauthorized");
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Account = {
  login: (values: FieldValues) => requests.post("users/login", values),
  singup: (values: FieldValues) => requests.post("users/signup", values),
  currentUser: () => requests.get("users/login"),
};

const agent = {
  Account,
};

export default agent;
