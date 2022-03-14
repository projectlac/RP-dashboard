// import {
//   ChangePasswordForm,
//   ChangePasswordWithTokenForm,
//   LoginForm,
//   OTPVerify,
//   PromiseApi,
//   PromiseVerifyApi,
//   RegisterForm,
//   ResponApi,
// } from "../models";
import axiosClient from "./axiosClient";

const loginApi = {
  login(params: any): Promise<any> {
    const url = "/Users/login";
    return axiosClient.post(url, params);
  }
};
export default loginApi;
