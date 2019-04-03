const initState = {
  count: 0
};

const acorn = (state = initState, action = '') => {
  if (action.type === 'MOD_COUNT') {
    return { count: action.count }
  } else { return state };
};

export default acorn;

