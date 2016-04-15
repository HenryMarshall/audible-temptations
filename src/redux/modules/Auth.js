// Constants
export const constants = { 
  SET_AUDIBLE_ACCESS_TOKEN: "SET_AUDIBLE_ACCESS_TOKEN",
  UNAWUTH: "UNAUTH",
}

// Action Creators
export const actions = { 
  saveAudibleAccessToken(accessToken) {
    return {
      type: constants.SET_AUDIBLE_ACCESS_TOKEN,
      payload: { audibleAccessToken: accessToken }
    }
  },
  unAuth() {
    return {
      type: constants.UNAUTH,
    }
  }
}

// Reducer
export const initialState = {}
export default function (state = initialState, action) {
  switch (action.type) {
    case constants.SET_AUDIBLE_ACCESS_TOKEN:
      return Object.assign({}, state, action.payload);
    default:
      return state
  }
}
