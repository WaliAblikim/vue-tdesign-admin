const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const remove = (key) => {
  localStorage.removeItem(key);
};

export default {
  set,
  get,
  remove,
};
