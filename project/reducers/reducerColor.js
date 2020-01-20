const initialState = {
  color: 'teal',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ChangeColor':
      console.log('color changed');
      console.log(action.payload);
      return '{action.payload}';
    default:
      return state;
  }
};
