import * as actionTypes from "./Actions";

import Axios from "../axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId, role) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
    role,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.LOGOUT,
  };
};

export const authSignUp = (username, email, password, phone) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      if (!(phone && username && email && password)) {
        dispatch(authFail("You must fill all Data "));
      } else {
        const res = await Axios.post("/signup", {
          email,
          username,
          password,
          phone,
        });
        if (res.status !== 200 && res.status !== 201) {
          dispatch(authFail(res.data.msg));
        } else {
         /*  localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.user.id); */
          dispatch(
            authSuccess(res.data.token, res.data.user.id, res.data.user.role)
          );
        }
      }
    } catch (err) {
      if (err.response.data) {
        dispatch(
          authFail(
            err.response.data.message
              ? err.response.data.message
              : err.response.data.errors
          )
        );
      } else {
        dispatch(authFail(err.response));
      }
    }
  };
};

export const authSignIn = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      if (!(email && password)) {
        dispatch(authFail("You must fill all Data "));
      } else {
        const res = await Axios.post("/login", { email, password });
        const data = res.data;
        if (res.status !== 200 && res.status !== 201) {
          dispatch(authFail(data.msg));
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user.id);
          dispatch(authSuccess(data.token, data.user.id, res.data.user.role));
        } /*  */
      }
    } catch (err) {
      if (err.response) {
        dispatch(
          authFail(
            err.response.data.message
              ? err.response.data.message
              : err.response.data.errors
          )
        );
      } else {
        dispatch(authFail("internal Server Error"));
      }
    }
  };
};

export const authCheckState = () => {
  return async (dispatch) => {
    try{
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      console.log(token)
      const res = await Axios.get("/profile", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      dispatch(authSuccess(token, userId, res.data.role));
    }
  }catch(err){
    console.log(err.response)
  }
}};
