import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;

export const api = {
  get: async (endpoint, token = null) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config = {
      method: "get",
      url: `${baseUrl}${endpoint}`,
      headers,
    };

    return await axios.request(config).then((res) => res.data);
  },
  getPaginated: async (endpoint, queryParams, token = null) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
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
        return {
          status: 200,
          data: response.data,
        };
      })
      .catch((error) => {
        return {
          status: error.response.status,
          error: error.response.data,
        };
      });
  },
  put: async (endpoint, body, token = null) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config = {
      method: "put",
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
          error: error.response.data.error ?? error.response.data,
        };
      });
  },
  post: async (endpoint, body, token = null) => {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
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
          error: error.response.data.error ?? error.response.data,
        };
      });
  },
  postWithoutBody: async (endpoint, token = null) => {
    let headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const config = {
      method: "post",
      url: `${baseUrl}${endpoint}`,
      headers,
    };

    return await axios.request(config).then((res) => res.data);
  },
};
