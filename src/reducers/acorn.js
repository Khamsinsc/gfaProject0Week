const initState = {
  count: 0
};

export const acorn = (state = initState, action = '') => {
  if (action.type === 'MOD_COUNT') {
    return { count: action.count }
  } else { return state };
};

