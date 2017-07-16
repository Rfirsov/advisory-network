import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';



class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
         <li><Link to="/products">Products</Link></li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Product network</Link>
          </div>
          <div className="collapse navbar-collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  };
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
