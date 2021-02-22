const init = {
  temperature: 0,

  address: '',

  feelLike: 0,

  heatIndex: '',

  windChillTemperature: '',

  time: '',

  six: [],
};

export default function counter(state = init, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
