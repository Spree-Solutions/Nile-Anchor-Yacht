import api from "@/lib/api";

/**
 * @param {string} method
 * @param {string} url
 * @param {Object} [data]
 * @param {Object} [query] -
 * @returns {Promise}
 */
const makeApiCall = async (method, url, data = null, query = {}, options = {}) => {
  let finalUrl = url;
  if (query) {
    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([, value]) => value !== null && value !== undefined && value !== ""),
    );

    const searchParams = new URLSearchParams(filteredQuery);
    const queryString = searchParams.toString();
    if (queryString) {
      finalUrl = `${url}${url.includes("?") ? "&" : "?"}${queryString}`;
    }
  }

  const requestConfig = {
    method: method.toLowerCase(),
    url: finalUrl,
    ...options,
  };

  if (data) {
    if (["post", "put", "patch"].includes(method.toLowerCase())) {
      requestConfig.data = data;
    } else if (method.toLowerCase() === "get") {
      requestConfig.params = data;
    }
  }

  const response = await api(requestConfig);
  return response.data;
};

export const apiGet = (url, query = null, options) => makeApiCall("get", url, null, query, options);

export const apiPost = (url, data = null, options) => makeApiCall("post", url, data, null, options);

export const apiPut = (url, data = null, options) => makeApiCall("put", url, data, null, options);

export const apiPatch = (url, data = null, options) => makeApiCall("patch", url, data, null, options);

export const apiDelete = (url) => makeApiCall("delete", url, null);

export default makeApiCall;
