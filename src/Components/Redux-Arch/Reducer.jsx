import * as types from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  isUser: [],
  properties: [], 
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // User Registration Cases
    case types.GETREQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GETSUCCESS:
      return { ...state, isLoading: false, isError: false, isUser: payload };

    case types.GETFAILURE:
      return { ...state, isLoading: false, isError: true };

    // Property Fetching Cases
    case types.GET_PROPERTIES_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_PROPERTIES_SUCCESS:
      return { ...state, isLoading: false, isError: false, properties: payload };

    case types.GET_PROPERTIES_FAILURE:
      return { ...state, isLoading: false, isError: true };

      // Post Property Cases
      case types.POST_PROPERTY_REQUEST:
        return { ...state, isPosting: true, isError: false };
  
      case types.POST_PROPERTY_SUCCESS:
        return { ...state, isPosting: false, isError: false, properties: [...state.properties, payload] };
  
      case types.POST_PROPERTY_FAILURE:
        return { ...state, isPosting: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
