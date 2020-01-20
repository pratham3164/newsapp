export default (username = 'hello', action) => {
  switch (action.type) {
    case 'Change':
      // console.log('in reduce');
      // console.log(action.payload);
      return action.payload;
    default:
      return username;
  }
};
