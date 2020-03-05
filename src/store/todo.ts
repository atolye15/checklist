const STORAGE_KEY = 'todos';

type State = Record<string, string[]>;

function getGlobalState(): State {
  if (typeof window === 'undefined') {
    return {};
  }

  const storage = localStorage.getItem(STORAGE_KEY);

  if (storage) {
    return JSON.parse(storage);
  }

  return {};
}

function updateGlobalState(nextState: State) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function get(key: string): string[] {
  const state = getGlobalState();

  return state[key] || [];
}

function update(key: string, todos: string[]) {
  const state = getGlobalState();

  updateGlobalState({ ...state, [key]: todos });
}

function remove(key: string) {
  const nextState = { ...getGlobalState() };

  delete nextState[key];

  updateGlobalState(nextState);
}

export default { update, get, remove };
