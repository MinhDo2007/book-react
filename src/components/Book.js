import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actBuyBookRequest} from './../actions'

class Book extends Component {
  buyBook = (id) => {
    this.props.onBuyBook(id)
  }

  render() {
    var {book} = this.props;
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <a href="/w3images/lights.jpg">
            <img src="https://www.tablegroup.com/images/books/dysfunctions.png" alt="Lights" />
            <div className="caption">
              <p><span><b>Name : </b></span>{book.name}</p>
              <p><b>Price : </b>{book.price}</p>
              <p><b>Author : </b>{book.author}</p>
              <p><b>Description : </b>{book.description}</p>
            </div>
          </a>
        <button className="btn-primary btn" onClick={() => this.buyBook(book.id)}>Buy</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, action) => {
  return {
    onBuyBook: (id) => {
      dispatch(actBuyBookRequest(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Book);
