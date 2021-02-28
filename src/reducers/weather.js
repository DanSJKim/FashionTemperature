import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
} from './actions';

const init = {
  latitude: '',
  longitude: '',
  temperature: 0,
  address: '',
  feelLike: 0,
  heatIndex: '',
  windChillTemperature: '',
  time: '',
  six: [],
  getLocationSuccess: false,
  getLocationFails: false,
};

export default function counter(state = init, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION_SUCCESS: {
      return {
        ...state,
        latitude: action.data.latitude,
        longitude: action.data.longitude,
        getLocationSuccess: true,
        getLocationFails: false,
      };
    }

    case GET_CURRENT_LOCATION_FAIL:
      return {
        ...state,
        getLocationSuccess: false,
        getLocationFails: action.error,
      };
    default:
      return state;
  }
}
