const STORAGE_KEY = 'activeChecklist';

function get(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return localStorage.getItem(STORAGE_KEY) || '';
}

function update(value: string) {
  localStorage.setItem(STORAGE_KEY, value);
}

export default { get, update };
