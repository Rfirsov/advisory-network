import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/authActions';

class SignupPage extends React.Component {
  render() {
    const { signupUser } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            signupUser={signupUser}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: () => dispatch(signupUser())
  }
}


SignupPage.propTypes = {
  signupUser: PropTypes.func.isRequired
}


export default connect(mapDispatchToProps)(SignupPage);
