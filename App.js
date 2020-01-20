import React, {Component} from 'react';

import Routes from './project/routesD';
import Login from './project/screens/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false, username: ''};
  }

  changeLog = name => this.setState({isLoggedIn: true, username: name});

  render() {
    if (this.state.isLoggedIn == true)
      return (
        <Routes
          screenProps={
            ((username = this.state.username),
            (chnageusername = this.changeLog))
          }
        />
      );
    return <Login secured={this.changeLog} />;
  }
}

export default App;
