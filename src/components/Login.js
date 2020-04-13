import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
  <nav className='login'>
    <h2>Inventory Login</h2>
    <p>Sign in to Manage your store's inventory</p>
    <button className='github' onClick={() => props.authenticate('Github')}>
      Sign in with GitHub
    </button>
    <button className='facebook' onClick={() => props.authenticate('Facebook')}>
      Sign in with FaceBook
    </button>
    <button className='twitter' onClick={() => props.authenticate('Twitter')}>
      Sign in with Twitter
    </button>
  </nav>
);


Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;