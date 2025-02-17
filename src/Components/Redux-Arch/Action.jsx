import axios from "axios";
import * as types from "./ActionType";

// User Registration Actions
const getRequest = () => ({ type: types.GETREQUEST });
const getSuccess = (payload) => ({ type: types.GETSUCCESS, payload });
const getFailure = () => ({ type: types.GETFAILURE });

export const registerUser = (payload) => {
  return (dispatch) => {
    dispatch(getRequest());

    return axios
      .post("http://localhost:8080/user/register", payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data, "User registered successfully");
        dispatch(getSuccess(res.data));
        return res;
      })
      .catch((err) => {
        console.error(err, "Error while registering user");
        dispatch(getFailure());
        return err;
      });
  };
};

// Fetch Properties Actions
const getPropertiesRequest = () => ({ type: types.GET_PROPERTIES_REQUEST });
const getPropertiesSuccess = (payload) => ({ type: types.GET_PROPERTIES_SUCCESS, payload });
const getPropertiesFailure = () => ({ type: types.GET_PROPERTIES_FAILURE });

export const fetchProperties = () => {
  return (dispatch) => {
    dispatch(getPropertiesRequest());

    return axios
      .get("http://localhost:8080/properties/getProperties")
      .then((res) => {
        console.log(res.data, "Fetched properties successfully");
        dispatch(getPropertiesSuccess(res.data));
      })
      .catch((err) => {
        console.error(err, "Error while fetching properties");
        dispatch(getPropertiesFailure());
      });
  };
};

// Post Property Actions
const postPropertyRequest = () => ({ type: types.POST_PROPERTY_REQUEST });
const postPropertySuccess = (payload) => ({ type: types.POST_PROPERTY_SUCCESS, payload });
const postPropertyFailure = () => ({ type: types.POST_PROPERTY_FAILURE });

export const postProperty = (payload) => {
    return (dispatch, getState) => {
      dispatch(postPropertyRequest());
  
      // Get token from the Redux store (assuming it's stored in `auth.token`)
      const token = getState().auth?.token;  
  
      return axios
        .post("http://localhost:8080/properties/add-properties", payload, {
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Add the token here
          },
        })
        .then((res) => {
          console.log(res.data, "Property posted successfully");
          dispatch(postPropertySuccess(res.data));
          return res;
        })
        .catch((err) => {
          console.error(err, "Error while posting property");
          dispatch(postPropertyFailure());
          return err;
        });
    };
  };

  export const searchProperties = (searchParams) => {
    return (dispatch) => {
      dispatch({ type: types.SEARCH_PROPERTIES_REQUEST });
  
      // Convert price to number if it exists
      if (searchParams.price) {
        searchParams.price = Number(searchParams.price);
      }
  
      return axios
        .get("http://localhost:8080/properties/searchProperties", { 
          params: {
            location: searchParams.location || '',
            property_type: searchParams.property_type || '',
            price: searchParams.price || '',
            query: searchParams.query || ''
          }
        })
        .then((res) => {
          console.log("Search results:", res.data);
          dispatch({ type: types.SEARCH_PROPERTIES_SUCCESS, payload: res.data });
          return res.data;
        })
        .catch((err) => {
          console.error("Search error:", err);
          dispatch({ type: types.SEARCH_PROPERTIES_FAILURE });
          return err;
        });
    };
  };
  
  export const getPropertyById = (id) => {
    return (dispatch) => {
      dispatch({ type: types.GET_PROPERTY_BY_ID_REQUEST });
  
      return axios
        .get(`http://localhost:8080/properties/getPropertyById/${id}`)
        .then((res) => {
          dispatch({ type: types.GET_PROPERTY_BY_ID_SUCCESS, payload: res.data });
          return res.data;
        })
        .catch((err) => {
          dispatch({ type: types.GET_PROPERTY_BY_ID_FAILURE });
          console.error("Property fetch error:", err);
          return err;
        });
    };
  };