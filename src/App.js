import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';
import Menu from './components/Menu';

class App extends Component {
  showContentMenus = (routes) => {
    var result = '';
    if(routes.length > 0){
      result = routes.map((route, index) => {
        return (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)
      })
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
