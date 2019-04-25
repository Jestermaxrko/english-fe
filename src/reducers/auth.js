const initialState = {
  user: null,
  error: false,
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        loading: true
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: false,
        loading: false,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        user: null,
        error: true,
        loading: false
      };
    default: 
      return state;
  }
}

