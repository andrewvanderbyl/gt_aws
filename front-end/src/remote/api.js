import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;

export const api = {
  get: async (endpoint, userId = null) => {
    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };

    if (userId) {
      headers["userId"] = userId;
    }

    const config = {
      method: "get",
      url: `${baseUrl}${endpoint}`,
      headers,
    };

    return await axios.request(config).then((res) => res.data);
  },
  getPaginated: async (endpoint, queryParams, userId = null) => {
    let config = {
      method: "get",
      url: `${baseUrl}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        page: queryParams.page,
        size: queryParams.size,
      },
    };

    return await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    // return await axios.request(config).then((res) => res.data);
  },
  post: async (endpoint, body, userId = null) => {
    let headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    };

    if (userId) {
      headers["userId"] = userId;
    }

    const config = {
      method: "post",
      url: `${baseUrl}${endpoint}`,
      headers,
      data: body,
    };

    return await axios.request(config).then((res) => res.data);
  },
};
