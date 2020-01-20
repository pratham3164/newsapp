export const change = username => {
  return {
    type: 'Change',
    payload: username,
  };
};
export const changeColor = color => {
  return {
    type: 'ChangeColor',
    payload: color,
  };
};
