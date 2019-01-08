import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      checkLogin: false
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = e => {
    e.preventDefault();
    var {userName, passWord} = this.state;
    const user = {
      name: userName,
      password: passWord
    }
    axios.post('http://localhost:3000/users', {user}).then(res => {
      if (res.data.status === "ok"){
        this.setState({checkLogin: true})
        localStorage.setItem('user', JSON.stringify({
          id: res.data.id,
          userName: userName,
          passWord: passWord,
          checkLogin: true
        }))
      } else {
        this.setState({checkLogin: false})
      }
    })
  }

  render() {
    var {checkLogin} = this.state;
    var {location} = this.props;
    if(checkLogin){
      return <Redirect to={{
        pathname: '/books',
        status: {
          from: location
        }
      }} />
    }
    return (
      <div>
        <h1>This is Login Page</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={this.onLogin}>
              <legend>Login</legend>
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" id="userName" placeholder="User Name" name="userName" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label>PassWord</label>
                <input type="password" className="form-control" id="passWord" placeholder="Input field" name="passWord" onChange={this.onChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
