export function get(key) {
  let data = localStorage.getItem(key);
  if (!data) {
    data = null;
  }
  return JSON.parse(data);
}

export function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function clear() {
  return localStorage.clear();
}
