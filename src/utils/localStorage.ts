const storagePrefix = 'wisely_';

const localStorage = {
  getItem: (key) => {
    const item = window.localStorage.getItem(`${storagePrefix}${key}`);
    return item ? JSON.parse(item) : item;
  },
  setItem: (key, value) => {
    window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  },
  removeItem: (key) => {
    window.localStorage.removeItem(`${storagePrefix}${key}`);
  },
  clear: () => {
    window.localStorage.clear();
  },
};

export default localStorage;
