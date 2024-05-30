import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;

export const api = {
  get: async (endpoint, userId = null) => {
    let headers = {
      "Content-Type": "application/json",
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
    let headers = {
      "Content-Type": "application/json",
    };

    if (userId) {
      headers["userId"] = userId;
    }

    let config = {
      method: "get",
      url: `${baseUrl}${endpoint}`,
      headers,
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
  },
  post: async (endpoint, body, userId = null) => {
    let headers = {
      "Content-Type": "application/json",
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

    return await axios
      .request(config)
      .then((res) => {
        return {
          status: 200,
          data: res.data,
        };
      })
      .catch((error) => {
        return {
          status: error.response.status,
          error: error.response.data,
        };
      });
  },
  postWithoutBody: async (endpoint, userId = null) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (userId) {
      headers["userId"] = userId;
    }

    const config = {
      method: "post",
      url: `${baseUrl}${endpoint}`,
      headers,
    };

    return await axios.request(config).then((res) => res.data);
  },
};
