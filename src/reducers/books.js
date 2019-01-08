import * as Types from './../constants/actionType';

var initialState = [];

const books = (state = initialState, action) => {
  switch(action.type){
    case Types.FETCH_BOOKS:
      state = action.books;
      return [...state];
    case Types.BUY_BOOK:
      return [...state]
    default: return  [...state];
  }
}

export default books;
