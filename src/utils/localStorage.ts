const storagePrefix = 'wisely_';

const localStorage = {
  getItem: (key: string) => {
    const item = window.localStorage.getItem(`${storagePrefix}${key}`);
    return item ? JSON.parse(item) : item;
  },
  setItem: (key: string, value: any) => {
    window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
  },
  removeItem: (key: string) => {
    window.localStorage.removeItem(`${storagePrefix}${key}`);
  },
  clear: () => {
    window.localStorage.clear();
  },
};

export default localStorage;
