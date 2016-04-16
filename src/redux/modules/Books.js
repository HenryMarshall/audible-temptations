// Constants
export const constants = { 
}

// Action Creators
export const actions = { 
}

// Reducer
import { INITIAL_BOOKS } from '../../constants';
export default function (state = INITIAL_BOOKS, action) {
  switch (action.type) {
    case "TOGGLE_HOSTAGE":
      return state.map(book => {
        if (book.asin === action.payload.asin) {
          return Object.assign({}, book, { isHostage: !book.isHostage })
        }
        return book;
      });
    default:
      return state
  }
}
