import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input 
            className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={this.onChange}
          />
        </div>

         <div className="form-group">
          <label className="control-label">Password</label>
          <input 
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group"><button className="btn btn-primary btn-lg">Login</button></div>
      </form>
    );
  }
}


LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginForm;