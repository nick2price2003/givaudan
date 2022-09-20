const baseUrl = 'https://ftgmfklet4.execute-api.eu-west-2.amazonaws.com/prod/';

export const api = (methodType, path, data = {}) => new Promise((resolve, reject) => {
  const url = baseUrl + path;
  const payload = {
    method: methodType,
    body: JSON.stringify(data),
  };
  if (methodType.toUpperCase() === 'GET') {
    delete payload.body;
  }
  try {
    fetch(url, payload)
      .then(async (response) => {
        const retObj = await response.json();
        if (response.status === 200) {
          resolve(retObj);
        } else {
          reject(retObj);
        }
      })
      .catch((error) => {
        reject(error);
      });
  } catch (e) {
    reject(e);
  }
});
