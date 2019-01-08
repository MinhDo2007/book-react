import React, { Component } from 'react';
import Book from "./Book"
import {connect} from 'react-redux';
import {actFetchBooksRequest} from './../actions/index'
import _ from 'lodash';
import {Redirect} from 'react-router-dom';

class BookList extends Component {
  componentDidMount(){
    this.props.fetchBookList();
  }

  showBooks(books){
    var result = null;
    if(books.length > 0){
      result = books.map((book, index) => {
        return <Book key={index} book={book} />
      })
    }
    return result;
  }

  render(){
    var user_info = JSON.parse(localStorage.getItem('user'));
    if(!_.isNull(user_info)) var {checkLogin} = user_info;
    if(!checkLogin){
      return <Redirect to={{
        pathname: '/',
      }} />
    }
    var {books} = this.props;

    return(
      <div className="row">
        {this.showBooks(books)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    books: state.books
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchBookList: () => {
      dispatch(actFetchBooksRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
