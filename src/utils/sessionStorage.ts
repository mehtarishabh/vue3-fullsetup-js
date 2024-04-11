const storagePrefix = 'wisely_';

const sessionStorage = {
  getItem: (key) => {
    const item = window.sessionStorage.getItem(`${storagePrefix}${key}`);
    return item ? JSON.parse(item) : item;
  },
  setItem: (key, value) => {
    window.sessionStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  },
  removeItem: () => {
    window.sessionStorage.removeItem(`${storagePrefix}token`);
  },
  clear: () => {
    window.sessionStorage.clear();
  },
};

export default sessionStorage;
