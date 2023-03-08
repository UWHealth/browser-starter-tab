export const getXIncrements = (keys) => {
  const length = keys.length;
  const bounds = [-200, 200];
  const delta = Math.abs(bounds[0] - bounds[1]);
  const increments = delta / length;

  return keys.map((s, i) => {
    if (i === 0) return bounds[0];
    if (i === length) return bounds[1];
    return ( increments * (i + 1) ) + bounds[0];
  });
};