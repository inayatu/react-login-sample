import axios from "axios";

const baseUrl = "http://delog.greymatter.com.pk";

/**
 * Returns API response
 * @param {object} options {url:'', method:'', queryParams:'', payload:{},limit:10, page:1 }
 * @return {json}
 */
const request = ({ url = null, method = null, headers = null, payload = null }) => {
  const options = {
    method,
    url: `${baseUrl}${url}`,
    data: payload,
  };

  // delete null keys
  Object.entries(options).forEach((obj) => {
    if (!obj[1]) delete options[obj[0]];
  });

  return new Promise((resolve, reject) => {
    if (!url || !method) return reject("URL and Method are missing.");

    /*   fetch(`${baseUrl}${url}`, options)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      }); */
    axios(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default request;
