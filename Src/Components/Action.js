export const ActionCity = city => {
  return {
    type: 'CITY',
    city,
  };
};
export const setListData = payload => {
  return {
    type: 'SET_LIST_DATA',
    payload,
  };
};
// export const setListWeather = payload => {
//   return {
//     type: 'SET_LIST_WEATHER',
//     payload,
//   };
// };
export const setLoading = (payload) => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};

