const initialState = {
  ListData: [],
  isLoading: false
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST_DATA':
      return {
        ...state,
        ListData: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
