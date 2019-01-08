import * as Types from './../constants/actionType';
import callApi from './../utils/apiCaller'

export const actFetchBooksRequest = () => {
  return (dispatch) => {
    callApi('books', 'GET', null).then(res => {
      dispatch(actFetchBooks(res.data))
    })
  }
}

export const actFetchBooks = (books) => {
  return {
    type: Types.FETCH_BOOKS,
    books
  }
}

export const actBuyBookRequest = (id) => {
  var user_info = JSON.parse(localStorage.getItem('user'));
  return (dispatch) => {
    callApi('user_books', 'POST', {book_id: id, user_id: user_info.id}).then(res => {
      console.log(res)
      dispatch(actBuyBook(res.data))
    })
  }
}

export const actBuyBook = (data) => {
  return {
    type: Types.BUY_BOOK
  }
}
