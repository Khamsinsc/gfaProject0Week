const buyAction = (count) => ({
  type: 'MOD_COUNT',
  count: count + 1
});

const eatAction = (count) => ({
  type: 'MOD_COUNT',
  count: Math.max(0, count - 1)
});

export {
  buyAction,
  eatAction
};