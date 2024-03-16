import axios from "axios";

const baseUrl = process.env.REACT_APP_API_ENDPOINT;

async function getUserById(userId) {
  let uri =
    baseUrl + process.env.REACT_APP_GET_USER_BY_ID.replace("{userId}", userId);

  const config = {
    method: "get",
    url: uri,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };

  let userData = await axios.request(config).then((res) => res.data);
  return userData;
}

export { getUserById };
