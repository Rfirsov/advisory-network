import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class LoginPage extends React.Component {
  render() {
  	const { loginUser } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm loginUser={loginUser} />
        </div>
      </div>
    );
  }
}


export default connect(null, { loginUser })(LoginPage);
