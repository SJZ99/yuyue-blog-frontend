"use strict";

import Vue from 'vue';
import axios from "axios";
import VueAxios from 'vue-axios'
import { keycloak } from './KeycloakTool'
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: 'https://localhost:8081/yuyue-api',
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {

    if(keycloak.token) {
      keycloak              // if token's life shorter than 120 sec, it will be refreshed.
        .updateToken(120)
        .then(() => {
          config.headers.Authorization = "Bearer " + keycloak.token;
        })
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, _axios)

export default _axios;
