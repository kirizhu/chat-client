import React from 'react';
import { connect } from 'react-redux';
import AddUser from './components/AddUser';
import Chat from './components/Chat';

class App extends React.Component {
  render() {
    const username = this.props.user.username;
    const addUser = !username ? <AddUser /> : null;
    const chat = username ? <Chat /> : null;

    return (
      <div>
        {addUser}
        {chat}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
