export const getCached = (key) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result);
};
export const setCached = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeCached = (key) => {
  localStorage.removeItem(key);
};
